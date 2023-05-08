import React, { Component } from 'react';
import './Die.css';

//die inherits the number on the dice as a prop from the state of the parent element, dynamically changing class
class Die extends Component {
    render() {
        let currFace = `Die fas fa-dice-${this.props.face} ${this.props.isRolling && 'isRolling'}`;
        return <i className={currFace}></i>
    }
}

export default Die;