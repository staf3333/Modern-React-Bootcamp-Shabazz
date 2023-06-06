import React from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';
import { useState } from 'react';

const Palette = (props) => {
    const [state, setState] = useState({
        level: 500,
        format: "hex"
    })
    const { colors } = props.palette;
    const { level, format } = state;
    const colorBoxes = colors[level].map(color => (
        <ColorBox background={color[format]} name={color.name} />
    ));
    const changeLevel = (newLevel) => {
        setState({ ...state, level: newLevel });
    }
    const changeColorFormat = (value) => {
        setState({ ...state, format: value });
    }
    return (
        <div className='Palette'>
            <Navbar level={level} changeLevel={changeLevel} changeColorFormat={changeColorFormat} />
            {/*Navbar goes here*/}
            <div className='Palette-colors'>
                {/* bunch of color boxes */}
                {colorBoxes}
            </div>
            {/* footer eventually */}
        </div>
    )
}

export default Palette;