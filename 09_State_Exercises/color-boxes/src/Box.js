import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    generateRandomColor() {
        let maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.random() * maxVal;
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);
        return `#${randColor.toUpperCase()}`
    }
    handleClick() {

    }
    render() {
        return (
            <div className='Box' style={{ backgroundColor: this.props.color }} onClick={this.props.onClick}>
                I'm a box!
            </div>
        )
    }
}

export default Box