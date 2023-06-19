import { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import { Button } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


const ColorPickerForm = (props) => {
    const [state, setState] = useState({
        currentColor: "teal",
        newColorName: ""
    });
    const { currentColor, newColorName } = state;
    const { paletteIsFull, addNewColor, colors } = props;

    useEffect(() => {
        ValidatorForm.addValidationRule('isColorNameUnique', value => {
            return colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            );
        });
        ValidatorForm.addValidationRule('isColorUnique', value => {
            return colors.every(
                ({ color }) => color.toLowerCase() !== currentColor.toLowerCase()
            );
        });
    });

    const updateCurrentColor = (newColor) => {
        setState({ ...state, currentColor: newColor.hex });
    };

    const handleChange = (evt) => {
        setState({ ...state, [evt.target.name]: evt.target.value })
    };

    const handleSubmit = () => {
        const newColor = { color: currentColor, name: newColorName };
        addNewColor(newColor);
        setState({ ...state, newColorName: "" });
    }

    return (
        <div>
            <ChromePicker
                color={currentColor}
                onChangeComplete={updateCurrentColor}
            />
            <ValidatorForm onSubmit={handleSubmit}>
                <TextValidator
                    value={newColorName}
                    onChange={handleChange}
                    name="newColorName"
                    validators={['required', 'isColorUnique', 'isColorNameUnique']}
                    errorMessages={['Enter a color name',
                        'Color already used',
                        'Color name must be unique'
                    ]}
                />
                <Button
                    variant='contained'
                    color='primary'
                    style={{
                        backgroundColor: paletteIsFull
                            ? "grey"
                            : currentColor
                    }}
                    type='submit'
                    disabled={paletteIsFull}
                >
                    {paletteIsFull ? "Palette Full" : "Add Color"}
                </Button>
            </ValidatorForm>
        </div>
    )
}

export default ColorPickerForm;