import 'rc-slider/assets/index.css';
import './Navbar.css'
import Slider from 'rc-slider';
import { Link } from 'react-router-dom';
import { Select, MenuItem, Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';

const Navbar = (props) => {
    const { level, changeLevel, changeColorFormat, showingAllColors } = props;
    const [state, setState] = useState({
        format: "hex",
        open: false
    });

    const { format, open } = state;

    const handleFormatChange = (e) => {
        setState({ ...state, format: e.target.value, open: true });
        changeColorFormat(e.target.value);
    }
    const closeSnackbar = () => {
        setState({ ...state, open: false });
    }

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={closeSnackbar}
                key="close"
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <nav className="Navbar">
            <div className="Navbar-logo">
                <Link to="/">reactcolorpicker</Link>
            </div>
            {showingAllColors && (
                <div className='slider-container'>
                    <span>level: {level}</span>
                    <div className='slider'>
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                            trackStyle={{ backgroundColor: "transparent" }}
                            railStyle={{ height: "8px" }}
                            handleStyle={{
                                backgroundColor: "green",
                                outline: "none",
                                border: "2px solid green",
                                boxShadow: "none",
                                width: "13px",
                                height: "13px",
                                marginLeft: "-7px",
                                marginTop: "-3px"
                            }}
                            activeDotStyle={{
                                borderColor: 'green',
                                boxShadow: 'none',
                                outline: 'none'
                            }}
                        />
                    </div>
                </div>
            )}

            <div className='select-container'>
                <Select value={format} onChange={handleFormatChange}>
                    <MenuItem value="hex">HEX - #ffffff</MenuItem>
                    <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                    <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                </Select>
            </div>

            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={open}
                autoHideDuration={3000}
                message={<span id='message-id'>Format Changed To {format.toUpperCase()}</span>}
                ContentProps={{
                    "aria-describedby": "message-id"
                }}
                action={action}
                onClose={closeSnackbar}
            />
            {/* <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Note archived"
                action={action}
            /> */}
        </nav>
    )
}

export default Navbar;