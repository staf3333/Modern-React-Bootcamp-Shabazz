import './App.css';
import Dog from './Dog';
import Contact from './Contact';
import About from './About';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

const Hater = () => <h1>I ABSOLUTELY HATE DOGS!</h1>;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className='App-nav'>
            <NavLink exact activeClassName="active-link" to='/'>About</NavLink>
            <NavLink exact activeClassName="active-link" to='/dog'>Dog</NavLink>
            <NavLink exact activeClassName="active-link" to='/contact'>Contact</NavLink>
          </nav>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/dog" component={Dog} />
            <Route exact path="/dog/hater" component={Hater} />
          </Switch>
        </div>

      </Router>
    )
  }
}

export default App;
