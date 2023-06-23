/** @jsxImportSource @emotion/react */
import {
    Avatar, Button, CssBaseline, FormControl, FormControlLabel,
    Checkbox, Input, InputLabel, Paper, Typography, MenuItem, Select
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const styles = {
    main: theme => ({
        width: "auto",
        display: "block",
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            width: 400,
            marginLeft: "auto",
            marginRight: "auto",
        }
    }),
    avatar: theme => ({
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    }),
    paper: theme => ({
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme
            .spacing(3)}px`
    }),
    form: theme => ({
        width: "100%",
        marginTop: theme.spacing(3)
    }),
    submit: theme => ({
        marginTop: theme.spacing(3)
    }),
}

const theme = createTheme();
const Form = () => {
    return (
        <ThemeProvider theme={theme}>
            <main css={styles.main}>
                <Paper css={styles.paper}>
                    <Avatar css={styles.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant='h5'>Sign In</Typography>
                    <Select value='english'>
                        <MenuItem value='english'>English</MenuItem>
                        <MenuItem value='french'>French</MenuItem>
                        <MenuItem value='spanish'>Spanish</MenuItem>
                    </Select>
                    <form css={styles.form}>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='email'>Email</InputLabel>
                            <Input id='email' name='email' autoFocus />
                        </FormControl>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <Input id='password' name='password' autoFocus />
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox color='primary' />}
                            label='Remember Me'
                        />
                        <Button
                            variant='contained'
                            type='submit'
                            fullWidth
                            color='primary'
                            css={styles.submit}
                        >
                            Sign In
                        </Button>
                    </form>
                </Paper>
            </main>
        </ThemeProvider>
    );
}

export default Form;