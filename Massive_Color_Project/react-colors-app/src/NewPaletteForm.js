import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ChromePicker } from 'react-color';
import { Button } from '@mui/material';
import DraggableColorList from "./DraggableColorList";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import PaletteList from './PaletteList';


const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        height: "calc(100vh - 64px)",
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const NewPaletteForm = (props) => {
    const [state, setState] = useState({
        open: true,
        currentColor: "teal",
        newColorName: "",
        newPaletteName: "",
    });
    const [colors, setColors] = useState(props.palettes[0].colors);
    const { open, currentColor, newColorName, newPaletteName } = state;
    const navigate = useNavigate();

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
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
            return props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            );
        });
    });

    const handleDrawerOpen = () => {
        setState({ ...state, open: true });
    };

    const handleDrawerClose = () => {
        setState({ ...state, open: false });
    };

    const updateCurrentColor = (newColor) => {
        setState({ ...state, currentColor: newColor.hex });
    };

    const addNewColor = () => {
        const newColor = { color: currentColor, name: newColorName };
        setColors(colors.concat(newColor));
    };

    const handleChange = (evt) => {
        setState({ ...state, [evt.target.name]: evt.target.value })
    };

    const clearColors = () => {
        setColors([]);
    };

    const addRandomColor = () => {
        //pcik random color form existing palettes
        const allColors = props.palettes.map(p => p.colors).flat();
        const rand = Math.floor(Math.random() * allColors.length);
        const randomColor = allColors[rand];
        setColors([...colors, randomColor]);
    };

    const handleSubmit = () => {
        let newName = newPaletteName;
        const newPalette = {
            paletteName: newName,
            id: newName.toLowerCase().replace(/ /g, "-"),
            colors: colors
        };
        props.savePalette(newPalette);
        navigate('/');
    };

    const removeColor = (colorName) => {
        setColors(colors.filter((color) => color.name !== colorName));
    };

    const { maxColors } = props;
    const paletteIsFull = colors.length >= maxColors;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" color='default' open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Persistent drawer
                    </Typography>
                    <ValidatorForm onSubmit={handleSubmit}>
                        <TextValidator
                            name="newPaletteName"
                            label="Palette Name"
                            value={newPaletteName}
                            onChange={handleChange}
                            validators={["required", "isPaletteNameUnique"]}
                            errorMessages={["Enter Palette Name", "Name already used"]}
                        />

                        <Button
                            variant='contained'
                            color='primary'
                            type="submit"
                        >
                            Save Palette
                        </Button>
                    </ValidatorForm>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <Typography variant='h4'>Design Your Palette</Typography>
                <div>
                    <Button
                        variant='contained'
                        color="secondary"
                        onClick={clearColors}
                    >
                        Clear Palette
                    </Button>
                    <Button
                        variant='contained'
                        color="primary"
                        onClick={addRandomColor}
                        disabled={paletteIsFull}
                    >
                        Random Color
                    </Button>
                </div>
                <ChromePicker
                    color={currentColor}
                    onChangeComplete={updateCurrentColor}
                />
                <ValidatorForm onSubmit={addNewColor}>
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
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <DraggableColorList
                    colors={colors}
                    setColors={setColors}
                    removeColor={removeColor}
                />
            </Main>
        </Box>
    );
}

NewPaletteForm.defaultProps = {
    maxColors: 20
};

export default NewPaletteForm;