import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const { score, doScore, name } = this.props
    return (
      <tr className={`RuleRow RuleRow-${score ? "disabled" : "active"}`} onClick={score ? null : doScore}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{score}</td>
      </tr>
    )
  }
}

export default RuleRow;