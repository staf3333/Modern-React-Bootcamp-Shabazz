import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';

function App() {
  return (
    <div>
      <Link to='/about'>About page</Link>
      <Link to='/blog'>Blog page</Link>
      <nav className='App-nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavLink to='/about'>About</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </div>

  );
}

export default App;
