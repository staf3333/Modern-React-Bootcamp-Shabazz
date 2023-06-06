import 'rc-slider/assets/index.css';
import './Navbar.css'
import Slider from 'rc-slider';
import { Select, MenuItem } from '@mui/material';
import { useState } from 'react';

const Navbar = (props) => {
    const { level, changeLevel, changeColorFormat } = props;
    const [format, setFormat] = useState("hex");
    const handleChange = (e) => {
        setFormat(e.target.value);
        changeColorFormat(e.target.value);
    }
    return (
        <nav className="Navbar">
            <div className="Navbar-logo">
                <a href="/">reactcolorpicker</a>
            </div>
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
            <div className='select-container'>
                <Select value={format} onChange={handleChange}>
                    <MenuItem value="hex">HEX - #ffffff</MenuItem>
                    <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                    <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                </Select>
            </div>
        </nav>
    )
}

export default Navbar;