import React, { Component } from 'react';
import './WiseSquare.css'

class ExperimentalSquare extends Component {
    static defaultProps = {
        messages: [
            "A fool things himself to be wise, but a wise man knows himself to be a fool.",
            "Educating the mind without educating the heart is no education at all.",
            "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
            "Excuses are tools of the incompetent, building monuments of nothingness. Those who excel in them seldom excel in anythingelse"
        ]
    }
    dispenseWisdom = () => {
        console.log('THIS IS...', this)
        let { messages } = this.props;
        let rIndex = Math.floor(Math.random() * messages.length);
        console.log(messages[rIndex]);
    }

    render() {
        return <div className='WiseSquare' onMouseEnter={this.dispenseWisdom}>😆</div>
    }
}

export default ExperimentalSquare 