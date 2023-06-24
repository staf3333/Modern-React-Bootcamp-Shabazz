import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import useInputState from './hooks/useInputState';
import { useContext } from 'react';
import { DispatchContext } from './contexts/todos.context';

function TodoForm() {
    const [value, handleChange, reset] = useInputState("");
    const dispatch = useContext(DispatchContext);
    console.log("Todo Form Render!!!");
    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch({ type: "ADD", task: value });
                reset();
            }}
            >
                <TextField
                    value={value}
                    onChange={handleChange}
                    margin='normal'
                    label='Add New Todo'
                    fullWidth
                />
            </form>
        </Paper>
    )
}

export default TodoForm;