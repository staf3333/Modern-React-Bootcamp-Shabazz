import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    let buttonType;
    if (this.props.rollsLeft > 0) {
      buttonType = <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleClick}
      >
        {this.props.val}
      </button>
    } else {
      buttonType = <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
      >
        {this.props.val}
      </button>
    }
    return (
      <div>
        {buttonType}
      </div>
    );
  }
}

export default Die;
