import './styles/App.css';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PaletteWrapper from './PaletteWrapper';
import NewPaletteForm from './NewPaletteForm';
import SingleColorPaletteWrapper from './SingleColorPaletteWrapper';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Page from './Page';

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [state, setState] = useState({
    palettes: savedPalettes || seedColors
  });
  const { palettes } = state;
  const deletePalette = (id) => {
    setState({ ...state, palettes: palettes.filter(palette => palette.id !== id) });
  }
  const syncLocalStorage = () => {
    //save palettes to local storage
    window.localStorage.setItem("palettes", JSON.stringify(state.palettes));
  }
  const savePalette = (newPalette) => {
    setState({ ...state, palettes: [...state.palettes, newPalette] });
  }
  useEffect(() => {
    syncLocalStorage();
  }, [state]);

  const location = useLocation();

  return (
    <TransitionGroup className="App" location={location}>
      <CSSTransition key={location.key} classNames="page" timeout={500}>
        <Routes location={location}>
          <Route index path='/' element={
            <Page>
              <PaletteList deletePalette={deletePalette} palettes={palettes} />
            </Page>
          }
          />
          <Route path='/palette/new' element={
            <Page>
              <NewPaletteForm savePalette={savePalette} palettes={palettes} />
            </Page>
          }
          />
          <Route path='/palette/:id' element={
            <Page>
              <PaletteWrapper palettes={palettes} />
            </Page>
          }
          />
          <Route path='/palette/:paletteId/:colorId' element={
            <Page>
              <SingleColorPaletteWrapper palettes={palettes} />
            </Page>
          }
          />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
