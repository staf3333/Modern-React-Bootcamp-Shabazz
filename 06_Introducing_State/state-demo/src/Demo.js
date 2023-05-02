import React, { Component } from 'react';

class Demo extends Component {
    constructor(props) {
        super();
        console.log(this.props);
    }
    render() {
        return <h1>DEMO COMPONENT!</h1>
    }
}

export default Demo;