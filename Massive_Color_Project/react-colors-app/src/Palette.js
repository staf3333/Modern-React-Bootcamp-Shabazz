import React from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';

const Palette = (props) => {
    const [level, setLevel] = useState(500);
    const { colors } = props.palette;
    const colorBoxes = colors[level].map(color => (
        <ColorBox background={color.hex} name={color.name} />
    ));
    const changeLevel = (newLevel) => {
        setLevel(newLevel);
    }
    return (
        <div className='Palette'>
            <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
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