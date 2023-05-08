import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        faces: ["one", "two", "three", "four", "five", "six"]
    }
    constructor(props) {
        super(props);
        this.state = {
            dice1: "one",
            dice2: "one",
            isRolling: false
        }
        this.roll = this.roll.bind(this);
    }
    roll(e) {
        let rand1 = Math.floor(Math.random() * this.props.faces.length);
        let rand2 = Math.floor(Math.random() * this.props.faces.length);
        this.setState({ dice1: this.props.faces[rand1], dice2: this.props.faces[rand2], isRolling: true })

        //wait one sec then set rolling to false
        setTimeout(() => {
            this.setState({ isRolling: false })
        }, 1000);
    }
    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-container'>
                    <Die face={this.state.dice1} isRolling={this.state.isRolling} />
                    <Die face={this.state.dice2} isRolling={this.state.isRolling} />
                </div>
                <button onClick={this.roll} disabled={this.state.isRolling}>
                    {this.state.isRolling ? 'Rolling...' : 'Roll Dice'}
                </button>
            </div>
        )
    }
}

export default RollDice;