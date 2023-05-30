import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuote.css';

class ZenQuote extends Component {
    constructor(props) {
        super(props);
        this.state = { quote: "", isLoaded: false };
    }
    componentDidMount() {
        //load data
        axios.get("https://api.github.com/zen").then(res => {
            setTimeout(
                function () {
                    this.setState({ quote: res.data, isLoaded: true });
                }.bind(this),
                3000
            );
        });
        //set state w that data
    }
    componentDidUpdate() {
        console.log("INSIDE COMPONENT DID UPDATE")
    }
    render() {
        return (
            <div>
                {this.state.isLoaded ? (
                    <div>
                        <h1>Always remember...</h1>
                        <p>{this.state.quote}</p>
                    </div>
                ) : (
                    <div className='loader' />
                )}
            </div>
        )
    }
}

export default ZenQuote;