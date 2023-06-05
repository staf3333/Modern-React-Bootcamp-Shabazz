import logo from './logo.svg';
import './App.css';
import Food from './Food';
import { Routes, Route } from 'react-router-dom';
import Meal from './Meal';
import NotFound from './NotFound';
import FoodSearch from './FoodSearch';

function App() {
  return (
    <div className="App">
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
