import './App.css';
import Palette from './Palette';
import { Routes, Route } from 'react-router-dom';
import PaletteWrapper from './PaletteWrapper';

function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>Palette LIST GOES HERE!</h1>} />
      <Route path='/palette/:id' element={<PaletteWrapper />} />
    </Routes>
    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
