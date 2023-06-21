/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button } from '@mui/material';
import DraggableColorList from "./DraggableColorList";
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import seedColors from './seedColors';
import styles from './styles/NewPaletteFormStyles';

const drawerWidth = 400;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        height: "calc(100vh - 64px)",
        padding: 0,
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

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const NewPaletteForm = (props) => {
    const [state, setState] = useState({
        open: true,
    });
    const [colors, setColors] = useState(seedColors[0].colors);
    const { open } = state;
    const navigate = useNavigate();

    const handleDrawerClose = () => {
        setState({ ...state, open: false });
    };

    const handleDrawerOpen = () => {
        setState({ ...state, open: true });
    };

    const addNewColor = (newColor) => {
        setColors(colors.concat(newColor));
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

    const handleSubmit = (newPalette) => {
        newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
        newPalette.colors = colors;
        props.savePalette(newPalette);
        navigate('/');
    };

    const removeColor = (colorName) => {
        setColors(colors.filter((color) => color.name !== colorName));
    };

    const { maxColors, palettes } = props;
    const paletteIsFull = colors.length >= maxColors;

    return (
        <Box sx={{ display: 'flex' }}>
            <PaletteFormNav
                open={open}
                palettes={palettes}
                handleSubmit={handleSubmit}
                handleDrawerOpen={handleDrawerOpen}
            />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        display: "flex",
                        alignItems: "center"
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
                <div css={styles.container}>
                    <Typography variant='h4' gutterBottom>Design Your Palette</Typography>
                    <div css={styles.buttons}>
                        <Button
                            variant='contained'
                            color="secondary"
                            onClick={clearColors}
                            css={styles.button}
                        >
                            Clear Palette
                        </Button>
                        <Button
                            variant='contained'
                            color="primary"
                            onClick={addRandomColor}
                            disabled={paletteIsFull}
                            css={styles.button}
                        >
                            Random Color
                        </Button>
                    </div>
                    <ColorPickerForm
                        paletteIsFull={paletteIsFull}
                        addNewColor={addNewColor}
                        colors={colors}
                    />
                </div>
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