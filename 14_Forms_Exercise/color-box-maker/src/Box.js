import React, { Component } from 'react';

class Box extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.removeBox(this.props.boxStyle.id);
    }
    render() {
        const boxStyle = {
            backgroundColor: this.props.boxStyle.backgroundColor,
            height: parseInt(this.props.boxStyle.height),
            width: parseInt(this.props.boxStyle.width)
        }
        return (
            <div className='Box'>
                <div style={boxStyle}></div>
                <button onClick={this.handleClick}>Remove Box</button>
            </div>
        )
    }
}

export default Box