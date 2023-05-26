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
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }
    addTodo(todo) {
        this.setState(state => ({
            todos: [...state.todos, todo]
        }))
    }
    removeTodo(id) {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }));
    }
    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, todoItem: updatedTask };
            }
            return todo;
        })
        this.setState({ todos: updatedTodos });
    }
    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        })
        this.setState({ todos: updatedTodos });
    }
    render() {
        return (
            <div>
                <h1>TodoList!</h1>
                <NewTodoForm addTodo={this.addTodo} />
                <ul>
                    {this.state.todos.map(todo => (
                        <Todo
                            task={todo.todoItem}
                            key={todo.id}
                            id={todo.id}
                            completed={todo.completed}
                            removeTodo={this.removeTodo}
                            updateTodo={this.update}
                            toggleTodo={this.toggleCompletion}
                        />
                    ))}
                </ul>

            </div>
        );
    }
}

export default TodoList;