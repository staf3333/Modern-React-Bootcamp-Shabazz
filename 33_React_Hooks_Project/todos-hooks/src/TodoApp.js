import useTodoState from './hooks/useTodoState';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
    const initialTodos = [
        { id: 1, task: "Clean Fishtank", completed: false },
        { id: 2, task: "Wash Car", completed: true },
        { id: 3, task: "Grow Beard", completed: false }
    ];

    const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos);

    return (
        <div>
            <Paper
                style={{
                    padding: 0,
                    margin: 0,
                    height: "100vh",
                    backgroundColor: "#fafafa"
                }}
                elevation={0}
            >
                <AppBar color='primary' position="static" style={{ height: "64px" }}>
                    <Toolbar>
                        <Typography color='inherit'>
                            TODOS WITH HOOKS
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container justifyContent='center' style={{
                    marginTop: "1rem"
                }}>
                    <Grid item xs={11} md={8} lg={4}>
                        <TodoForm addTodo={addTodo} />
                        <TodoList
                            todos={todos}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                            editTodo={editTodo}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default TodoApp;

// -TodoApp
//   -TodoForm
//   -TodoList
//     -TodoItem

//id , task, completed