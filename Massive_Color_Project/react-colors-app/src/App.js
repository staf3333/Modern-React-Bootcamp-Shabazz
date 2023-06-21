import './styles/App.css';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PaletteWrapper from './PaletteWrapper';
import NewPaletteForm from './NewPaletteForm';
import SingleColorPaletteWrapper from './SingleColorPaletteWrapper';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
      <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <Routes location={location}>
          <Route index path='/' element={
            <div className='page'>
              <PaletteList deletePalette={deletePalette} palettes={palettes} />
            </div>
          }
          />
          <Route path='/palette/new' element={
            <div className='page'>
              <NewPaletteForm savePalette={savePalette} palettes={palettes} />
            </div>
          }
          />
          <Route path='/palette/:id' element={
            <div className='page'>
              <PaletteWrapper palettes={palettes} />
            </div>
          }
          />
          <Route path='/palette/:paletteId/:colorId' element={
            <div className='page'>
              <SingleColorPaletteWrapper palettes={palettes} />
            </div>
          }
          />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
