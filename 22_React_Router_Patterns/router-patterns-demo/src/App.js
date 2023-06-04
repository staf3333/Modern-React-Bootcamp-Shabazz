import logo from './logo.svg';
import './App.css';
import Food from './Food';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/food/:name" element={<Food />} />
      </Routes>
    </div>
  );
}

export default App;
