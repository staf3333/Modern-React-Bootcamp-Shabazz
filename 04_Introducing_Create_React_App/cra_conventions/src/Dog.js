import { React, Component } from 'react'
import tibMastiff from './TibMastiff.jpg'
import './Dog.css'

class Dog extends Component {
    render() {
        return (
            <div className='Dog'>
                <h1>Dog!</h1>
                <img className='Dog-img' src={tibMastiff} />
            </div>
        );
    }
}

export default Dog;
