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
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';

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
    })
}

const theme = createTheme();
const inputTheme = createTheme({
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    color: "inherit",
                    width: "100%"
                },
                input: {
                    paddingTop: "8px",
                    paddingRight: "8px",
                    paddingBottom: "8px",
                    paddingLeft: "80px",
                    width: "100%",
                    '@media (min-width: 600px)': {
                        width: 120,
                        "&:focus": {
                            width: 200
                        }
                    }
                }
            },
        },
    },
});

const content = {
    english: {
        search: "Search",
        flag: "🇬🇧"
    },
    french: {
        search: "Chercher",
        flag: "🇫🇷"
    },
    spanish: {
        search: "Buscar",
        flag: "🇪🇸"
    }
};

const Navbar = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext)
    const { search, flag } = content[language];
    return (
        <ThemeProvider theme={theme}>
            <div css={styles.root}>
                <AppBar position='static' color={isDarkMode ? "default" : "primary"}>
                    <Toolbar>
                        <IconButton css={styles.menuButton} color='inherit'>
                            <span>{flag}</span>
                        </IconButton>
                        <Typography css={styles.title} variant='h6' color='inherit'>
                            App Title
                        </Typography>
                        <Switch onChange={toggleTheme} />
                        <div css={styles.grow} />
                        <div css={styles.search}>
                            <div css={styles.searchIcon}>
                                <SearchIcon />
                            </div>
                            <ThemeProvider theme={inputTheme}>
                                <InputBase
                                    placeholder={`${search}...`}
                                />
                            </ThemeProvider>
                        </div>
                    </Toolbar>
                </AppBar>
            </div >
        </ThemeProvider >
    )
}

export default Navbar;