import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Game2 from './Game2';
import Demo from './Demo';
import Rando from './Rando';

function App() {
  return (
    <div className="App">
      <Game />
      <Game2 />
      <Demo animal='Bobcat' food='Pineapple' />
      <Rando maxNum={7} />
    </div>
  );
}

export default App;
