import './App.css';
import whiskey from "./imgs/whiskey.jpg";
import tubby from "./imgs/tubby.jpg";
import hazel from "./imgs/hazel.jpg";
import Navbar from './Navbar';
import RoutesComp from './RoutesComp';

function App(props) {
  return (
    <div>
      <Navbar dogs={props.dogs} />
      <div className='container'>
        <RoutesComp dogs={props.dogs} />
      </div>
    </div>
  );
}

export default App;

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Hazel",
      age: 3,
      src: hazel,
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food."
      ]
    }
  ]
}
