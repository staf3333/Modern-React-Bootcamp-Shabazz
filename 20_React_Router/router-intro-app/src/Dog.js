import React, { Component } from 'react';

class Dog extends Component {
    render() {
        return (
            <div className='Dog'>
                <h1>Dog!!</h1>
                <h3>This Dog's name is: {this.props.name}</h3>
                <img src='https://images.unsplash.com/photo-1600352712371-15fd49ca42b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80' />
            </div>
        )
    }
}

export default Dog;