import React, { Component } from 'react';
import LottoBall from './LottoBall';

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto!',
        numBalls: 6,
        maxNum: 40
    }
    constructor(props) {
        super(props);
        this.state = {
            nums: [1, 1, 1, 1, 1, 1]
        };
        this.genNums = this.genNums.bind(this);
    }
    genNums() {
        // this.setState({ nums: newNums })
    }
    render() {
        return (
            <div>
                <LottoBall num={4} />
                <LottoBall num={4} />
                <LottoBall num={4} />
                <button onClick={this.genNums}>Generate</button>
            </div>
        )
    }
}

export default Lottery