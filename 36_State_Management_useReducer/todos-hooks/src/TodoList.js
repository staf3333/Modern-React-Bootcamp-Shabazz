import { useContext, Fragment } from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Todo from './Todo';
import { TodosContext } from './contexts/todos.context';

function TodoList() {
    const todos = useContext(TodosContext);
    if (todos.length) {
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) => (
                        <Fragment key={i}>
                            <Todo
                                {...todo}
                                key={todo.id}
                            />
                            {i < todos.length - 1 && <Divider />}
                        </Fragment>
                    ))}
                </List>
            </Paper>
        )
    }
    return null;
}
export default TodoList;