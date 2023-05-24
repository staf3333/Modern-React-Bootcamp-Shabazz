import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodoText: ''
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
        const newTodo = { todoItem: this.state.newTodoText, id: uuidv4() }
        this.props.addTodo(newTodo);
    }
    render() {
        return (
            <div>
                <h1>Todo Form!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='todoInput'>New Todo</label>
                    <input
                        id='todoInput'
                        type='text'
                        placeholder='New Todo'
                        name='newTodoText'
                        value={this.state.newTodoText}
                        onChange={this.handleChange}
                    />
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm;
