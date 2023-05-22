import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '',
            width: '',
            backgroundColor: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createBox(this.state);
        this.setState({
            height: '',
            width: '',
            backgroundColor: ''
        })
    }
    render() {
        return (
            <div className='NewBoxForm'>
                <h1>Create a new box</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='height'>Height: </label>
                        <input
                            type='text'
                            id='height'
                            name='height'
                            value={this.state.height}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='width'>Width: </label>
                        <input
                            type='text'
                            id='width'
                            name='width'
                            value={this.state.width}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='backgroundColor'>Background Color: </label>
                        <input
                            type='text'
                            id='backgroundColor'
                            name='backgroundColor'
                            value={this.state.backgroundColor}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button>Create!</button>
                </form>
            </div>
        )
    }
}

export default NewBoxForm