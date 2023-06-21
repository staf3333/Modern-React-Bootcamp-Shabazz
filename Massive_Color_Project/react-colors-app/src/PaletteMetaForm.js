import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const emails = ['username@gmail.com', 'user02@gmail.com'];

const PaletteMetaForm = (props) => {
    const [state, setState] = useState({
        newPaletteName: "",
        open: true
    });
    const [selectedValue, setSelectedValue] = useState(emails[1]);

    const { newPaletteName, open } = state;

    useEffect(() => {
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
            return props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            );
        });
    });

    const handleChange = (evt) => {
        setState({ ...state, [evt.target.name]: evt.target.value })
    };

    const handleClickOpen = () => {
        setState({ ...state, open: true });
    };

    const handleClose = (value) => {
        setState({ ...state, open: false });
        setSelectedValue(value);
    };

    const { handleSubmit } = props;

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Set backup account</DialogTitle>
            <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
                <DialogContent>
                    <DialogContentText>
                        Please enter a name for your beautiful new palette. Make sure it's unique!
                    </DialogContentText>

                    <TextValidator
                        name="newPaletteName"
                        label="Palette Name"
                        value={newPaletteName}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        validators={["required", "isPaletteNameUnique"]}
                        errorMessages={["Enter Palette Name", "Name already used"]}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        variant='contained'
                        color='primary'
                        type="submit"
                    >
                        Save Palette
                    </Button>
                </DialogActions>
            </ValidatorForm>
        </Dialog>
    );
}

export default PaletteMetaForm