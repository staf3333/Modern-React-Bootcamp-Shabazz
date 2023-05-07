import React, { Component } from 'react';

class Die extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                This is a dice!
                <i class="fas fa-dice-one"></i>
            </div>
        )
    }
}

export default Die;