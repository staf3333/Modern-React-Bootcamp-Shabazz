import React, { Component } from 'react';
import axios from 'axios';

class GithubUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { imgUrl: "", name: "" };
    }
    async componentDidMount() {
        const url = `https://api.github.com/users/${this.props.username}`;
        let response = await axios.get(url);
        let data = response.data;
        this.setState({ imageUrl: data.avatar_url, name: data.name })
        console.log(response.data)
    }
    render() {
        return (
            <div>
                <h1>Github User: {this.state.name}</h1>
                <img src={this.state.imageUrl} />
            </div>
        )
    }
}

export default GithubUserInfo;