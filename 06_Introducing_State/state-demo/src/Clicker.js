import React, { Component } from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState({ number: Math.floor(Math.random() * 10 + 1) });
    }
    render() {
        // if (this.state.number === 7) {
        //     return (
        //         <div>
        //             <h1>Number is {this.state.number}</h1>
        //             <h2>YOU WIN!</h2>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <h1>Number is {this.state.number}</h1>
        //             <button onClick={this.handleClick}>Random Number</button>
        //         </div>
        //     )
        // }
        return (
            <div>
                <h1>Number is {this.state.number}</h1>
                {this.state.number === 7
                    ? <h2>YOU WIN!</h2>
                    : <button onClick={this.handleClick}>Random Number</button>
                }
            </div>
        )
    }
}

export default Clicker;

