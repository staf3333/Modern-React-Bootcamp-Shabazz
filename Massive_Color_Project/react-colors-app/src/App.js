import './styles/App.css';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PaletteWrapper from './PaletteWrapper';
import NewPaletteForm from './NewPaletteForm';
import SingleColorPaletteWrapper from './SingleColorPaletteWrapper';

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [state, setState] = useState({
    palettes: savedPalettes || seedColors
  });
  const { palettes } = state;
  const syncLocalStorage = () => {
    //save palettes to local storage
    window.localStorage.setItem("palettes", JSON.stringify(state.palettes));
  }
  const savePalette = (newPalette) => {
    setState({ ...state, palettes: [...state.palettes, newPalette] });
  }
  useEffect(() => {
    syncLocalStorage();
  }, [state])


  return (
    <Routes>
      <Route path='/' element={<PaletteList palettes={palettes} />} />
      <Route path='/palette/new' element={<NewPaletteForm savePalette={savePalette} palettes={palettes} />} />
      <Route path='/palette/:id' element={<PaletteWrapper palettes={palettes} />} />
      <Route path='/palette/:paletteId/:colorId' element={<SingleColorPaletteWrapper palettes={palettes} />} />
    </Routes>
  );
}

export default App;
