/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import PaletteMetaForm from './PaletteMetaForm';
import styles from './styles/PaletteFormNavStyles';

const drawerWidth = 400;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));



const PaletteFormNav = (props) => {
    const [state, setState] = useState({
        formShowing: false
    });

    const showForm = () => {
        setState({ ...state, formShowing: true });
    }
    const hideForm = () => {
        setState({ ...state, formShowing: false });
    }

    const { open, handleSubmit, handleDrawerOpen, palettes } = props;
    const { formShowing } = state;
    return (
        <div>
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
                        Create a Palette
                    </Typography>
                </Toolbar>

                <div css={styles.navBtns}>
                    <Link to="/" css={styles.link}>
                        <Button css={styles.button} variant='contained' color='secondary'>Go Back</Button>
                    </Link>
                    <Button variant="contained" onClick={showForm} css={styles.button}>
                        Save
                    </Button>
                </div>
            </AppBar>
            {formShowing &&
                <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} hideForm={hideForm} />
            }

        </div>
    )
}

export default PaletteFormNav;