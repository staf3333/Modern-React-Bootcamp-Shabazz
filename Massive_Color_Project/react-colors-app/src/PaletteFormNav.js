/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
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
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

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

const styles = {
    root: css({
        display: "flex"
    }),
    navBtns: css({

    })
}

const PaletteFormNav = (props) => {
    const [state, setState] = useState({
        newPaletteName: "",
    });

    const { open, handleSubmit, handleDrawerOpen, palettes } = props;
    const { newPaletteName } = state;
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

                    <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} />
                    <Link to="/">
                        <Button variant='container' color='secondary'>Go Back</Button>
                    </Link>
                </div>
            </AppBar>
        </div>
    )
}

export default PaletteFormNav;