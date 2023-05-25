import React, { Component } from 'react';
import './Todo.css';


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleClick = this.handleClick.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    handleClick() {
        this.props.removeTodo(this.props.id);
    }
    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing });
    }
    handleUpdate(evt) {
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({ isEditing: false })
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input type='text' name='task' value={this.state.task} onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div className='Todo'>
                    <li>{this.props.task}</li>
                    <button onClick={this.handleClick}>X</button>
                    <button onClick={this.toggleForm}>Edit</button>
                </div>
            )
        }
        return result;
    }
}

export default Todo