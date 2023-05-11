import logo from './logo.svg';
import './App.css';
// import LottoBall from './LottoBall';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title='Mini Daily' maxNMum={10} numBalls={4} />
    </div>
  );
}

export default App;
