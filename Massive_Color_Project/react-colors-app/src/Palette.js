import React from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';
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
            <Navbar level={level} changeLevel={changeLevel} />
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