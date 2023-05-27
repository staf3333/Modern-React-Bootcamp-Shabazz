import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {
  render() {
    return <div className="Dice">
      {this.props.dice.map((d, idx) =>
        <Die handleClick={this.props.handleClick}
          val={d}
          locked={this.props.locked[idx]}
          idx={idx}
          rollsLeft={this.props.rollsLeft}
          key={idx} />
      )}
    </div>
  }
}

export default Dice;