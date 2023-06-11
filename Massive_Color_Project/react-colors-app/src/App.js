import './App.css';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import { Routes, Route } from 'react-router-dom';
import PaletteWrapper from './PaletteWrapper';
import SingleColorPalette from './SingleColorPalette';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PaletteList palettes={seedColors} />} />
      <Route path='/palette/:id' element={<PaletteWrapper />} />
      <Route path='/palette/:paletteId/:colorId' element={<SingleColorPalette />} />
    </Routes>
    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
