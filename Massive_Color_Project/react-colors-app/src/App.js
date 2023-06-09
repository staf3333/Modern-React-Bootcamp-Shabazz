import './App.css';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import { Routes, Route } from 'react-router-dom';
import PaletteWrapper from './PaletteWrapper';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PaletteList palettes={seedColors} />} />
      <Route path='/palette/:id' element={<PaletteWrapper />} />
    </Routes>
    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
