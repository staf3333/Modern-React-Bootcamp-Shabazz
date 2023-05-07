import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
    static defaultProps = {
        face: ["fas fa-dice-one", "fas fa-dice-two", "fas fa-dice-three", "fas fa-dice-four", "fas fa-dice-five", "fas fa-dice-six"]
    }
    constructor(props) {
        super(props);
        this.state = {
            dice1: "fas fa-dice-two",
            dice2: "fas fa-dice-one"
        }
        this.roll = this.roll.bind(this);
    }
    roll(e) {
        let rand1 = Math.floor(Math.random() * 6);
        let rand2 = Math.floor(Math.random() * 6);
        this.setState({ dice1: this.props.face[rand1], dice2: this.props.face[rand2] })
    }
    render() {
        return (
            <div>
                <Die dieFace={this.state.dice1} />
                <Die dieFace={this.state.dice2} />
                <button onClick={this.roll}>Roll Dice!</button>
            </div>
        )
    }
}

export default RollDice;