/** @jsxImportSource @emotion/react */
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import { css } from '@emotion/react';

const styles = {
    root: css({
        width: "100%",
        marginBottom: 0
    }),
    grow: css({
        flexGrow: 1
    }),
    menuButton: css({
        marginLeft: -12,
        marginRight: 20
    }),
    title: theme => ({
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    }),
    search: theme => ({
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto"
        }
    }),
    searchIcon: theme => ({
        width: theme.spacing(9),
        height: "100%",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }),
    inputRoot: css({
        color: "inherit",
        width: "100%"
    }),
    inputInput: theme => ({
        paddingTop: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(10),
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: 120,
            "&:focus": {
                width: 200
            }
        }
    })
}
// const styles = theme => ({
//     root: {
//         width: "100%",
//         marginBottom: 0
//     },
//     grow: {
//         flexGrow: 1
//     },
//     menuButton: {
//         marginLeft: -12,
//         marginRight: 20
//     },
//     title: {
//         display: "none",
//         [theme.breakpoints.up("sm")]: {
//             display: "block"
//         }
//     },
//     search: {
//         position: "relative",
//         borderRadius: theme.shape.borderRadius,
//         backgroundColor: theme.palette.common.white,
//         "&:hover": {
//             backgroundColor: theme.palette.common.white
//         },
//         marginLeft: 0,
//         width: "100%",
//         [theme.breakpoints.up("sm")]: {
//             marginLeft: theme.spacing(1),
//             width: "auto"
//         }
//     },
//     searchIcon: {
//         width: theme.spacing(9),
//         height: "100%",
//         position: "absolute",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     inputRoot: {
//         color: "inherit",
//         width: "100%"
//     },
//     inputInput: {
//         paddingTop: theme.spacing(1),
//         paddingRight: theme.spacing(1),
//         paddingBottom: theme.spacing(1),
//         paddingLeft: theme.spacing(10),
//         transition: theme.transitions.create("width"),
//         width: "100%",
//         [theme.breakpoints.up("sm")]: {
//             width: 120,
//             "&:focus": {
//                 width: 200
//             }
//         }
//     }
// })

const theme = createTheme();
const Navbar = () => {
    return (
        <ThemeProvider theme={theme}>
            <div css={styles.root}>
                <AppBar position='static' color='primary'>
                    <Toolbar>
                        <IconButton css={styles.menuButton} color='inherit'>
                            <span>🇫🇷</span>
                        </IconButton>
                        <Typography css={styles.title} variant='h6' color='inherit'>
                            App Title
                        </Typography>
                        <Switch />
                        <div css={styles.grow} />
                        <div css={styles.search}>
                            <div className={styles.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder='Search...'
                                css={{
                                    root: styles.inputRoot,
                                    input: styles.inputInput
                                }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </div >
        </ThemeProvider >
    )
}

export default Navbar;