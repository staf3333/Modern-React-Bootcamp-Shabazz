import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { Routes, Route } from 'react-router-dom';
import { generatePalette } from './colorHelpers';

function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>Palette LIST GOES HERE!</h1>} />
      <Route path='/palette/:id' element={<h1>INDIVIDUAL PALETTE</h1>} />
    </Routes>
    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
