import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

const PaletteMetaForm = (props) => {
    const [state, setState] = useState({
        newPaletteName: "",
        open: true
    });

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

    // const handleClickOpen = () => {
    //     setState({ ...state, open: true });
    // };

    // const handleClose = (value) => {
    //     setState({ ...state, open: false });
    //     setSelectedValue(value);
    // };

    const { handleSubmit, hideForm } = props;

    return (
        <Dialog onClose={hideForm} open={open}>
            <DialogTitle>Set backup account</DialogTitle>
            <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
                <DialogContent>
                    <DialogContentText>
                        Please enter a name for your beautiful new palette. Make sure it's unique!
                    </DialogContentText>
                    <Picker data={data} onEmojiSelect={console.log} />

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
                    <Button onClick={hideForm} color='primary'>
                        Cancel
                    </Button>
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