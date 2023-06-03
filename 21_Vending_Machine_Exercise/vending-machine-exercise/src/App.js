import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Soda from './Soda';
import Apples from './Apples';
import Chips from './Chips';
import VendingMachine from './VendingMachine';

function App() {
  return (
    <div className="App">
      <nav className='App-nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/soda'>Soda</NavLink>
        <NavLink to='/apples'>Apples</NavLink>
        <NavLink to='/chips'>Chips</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<VendingMachine />} />
        <Route path='/soda' element={<Soda />} />
        <Route path='/apples' element={<Apples />} />
        <Route path='/chips' element={<Chips />} />
      </Routes>
    </div>
  );
}

export default App;
