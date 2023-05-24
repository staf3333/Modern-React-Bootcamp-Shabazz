import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuidv4 } from 'uuid';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }
    addTodo(todo) {
        this.setState(state => ({
            todos: [...state.todos, todo]
        }))
    }
    removeTodo(id) {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }))
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.todos.map(todo => (
                        <Todo task={todo.todoItem} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
                    ))}
                </ul>
                <NewTodoForm addTodo={this.addTodo} />
            </div>
        );
    }
}

export default TodoList;