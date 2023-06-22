import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import EditTodoForm from './EditTodoForm';
import useToggleState from './hooks/useToggleState';

function Todo({ task, completed, removeTodo, id, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggleState(false);
    return (
        <ListItem style={{ height: "64px" }}>
            {isEditing ? (<EditTodoForm editTodo={editTodo} id={id} task={task} toggleEdit={toggle} />) : (
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="delete" onClick={() => removeTodo(id)}>
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
export default Todo;