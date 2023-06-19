import './styles/App.css';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import PaletteWrapper from './PaletteWrapper';
import NewPaletteForm from './NewPaletteForm';
import SingleColorPaletteWrapper from './SingleColorPaletteWrapper';

function App() {
  const [state, setState] = useState({
    palettes: seedColors
  })
  const { palettes } = state;
  const savePalette = (newPalette) => {
    setState({ ...state, palettes: [...state.palettes, newPalette] })
  }

  return (
    <Routes>
      <Route path='/' element={<PaletteList palettes={palettes} />} />
      <Route path='/palette/new' element={<NewPaletteForm savePalette={savePalette} palettes={palettes} />} />
      <Route path='/palette/:id' element={<PaletteWrapper palettes={palettes} />} />
      <Route path='/palette/:paletteId/:colorId' element={<SingleColorPaletteWrapper palettes={palettes} />} />
    </Routes>
    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
