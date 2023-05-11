import React, { Component } from 'react';
import Coin from './Coin';

class Flipper extends Component {
    static defaultProps = {
        sides: [`https://tinyurl.com/react-coin-heads-jpg`, 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg']
    }
    constructor(props) {
        super(props);
        this.state = {
            numTails: 0,
            numHeads: 0,
            isTails: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    incrementTails(curState) {
        return { numTails: this.state.numTails + 1, isTails: true }
    }
    incrementHeads(curState) {
        return { numHeads: this.state.numHeads + 1, isTails: false }
    }
    flip() {
        //flip coin and set state 
        let num = Math.floor(Math.random() * 2) === 0;
        if (num) {
            this.setState(this.incrementTails)
        } else {
            this.setState(this.incrementHeads)
        }
    }
    handleClick() {
        this.flip();
    }
    render() {
        return (
            <div className='Flipper'>
                <h1>Let's Flip a Coin!</h1>
                {this.state.isTails ? <Coin side={this.props.sides[1]} /> : <Coin side={this.props.sides[0]} />}
                <button onClick={this.handleClick}>Flip Coin!</button>
                <p>Out of {this.state.numHeads + this.state.numTails} flips, there have been {this.state.numHeads} heads
                    and {this.state.numTails} tails</p>
            </div>
        )
    }
}

export default Flipper