import React, { Component } from 'react';
import Box from './Box';
import './Boxes.css'

class Boxes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            box_colors: Array.from({ length: 16 },)
        }
        this.generateRandomColor = this.generateRandomColor.bind(this)
    }
    generateRandomColor() {
        let maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.random() * maxVal;
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);
        return `#${randColor.toUpperCase()}`
    }
    handleClick() {
        this.generateRandomColor()
    }
    render() {
        return (
            <div className='Boxes'>
                {this.state.box_colors.map(color => (
                    <Box color={this.generateRandomColor()} onClick={this.handleClick} />
                ))}
            </div>
        )
    }
}

export default Boxes