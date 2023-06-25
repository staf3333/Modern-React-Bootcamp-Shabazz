import { useContext, memo } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import EditTodoForm from './EditTodoForm';
import useToggleState from './hooks/useToggleState';
import { DispatchContext } from './contexts/todos.context';

function todoPropsAreEqual(prevTodo, nextTodo) {
    return prevTodo.task === nextTodo.task
        && prevTodo.completed === nextTodo.completed;
}

function Todo({ task, completed, id }) {
    const dispatch = useContext(DispatchContext)
    const [isEditing, toggle] = useToggleState(false);
    console.log("TODO RE-RENDER:", task);
    return (
        <ListItem style={{ height: "64px" }}>
            {isEditing ? (<EditTodoForm id={id} task={task} toggleEdit={toggle} />) : (
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => dispatch({ type: "TOGGLE", id: id })} />
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="delete" onClick={() => dispatch({ type: "REMOVE", id: id })}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="edit" onClick={toggle}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    );
}
export default memo(Todo, todoPropsAreEqual);