import React, { Component } from 'react';
import './Die.css'

//die inherits the number on the dice as a prop from the state of the parent element, dynamically changing class
class Die extends Component {
    render() {
        return (
            <div>
                <i className={this.props.dieFace}></i>
            </div >
        )
    }
}

export default Die;