import logo from './logo.svg';
import './App.css';
import Food from './Food';
import { Routes, Route } from 'react-router-dom';
import Meal from './Meal';
import NotFound from './NotFound';
import FoodSearch from './FoodSearch';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<FoodSearch />} />
        <Route path="/food/:foodName" element={<Food />} />
        <Route path="/food/:foodName/drink/:drinkName" element={<Meal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
