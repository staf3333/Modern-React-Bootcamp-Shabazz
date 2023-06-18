import React from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import './styles/Palette.css';
import { useState } from 'react';

const Palette = (props) => {
    const [state, setState] = useState({
        level: 500,
        format: "hex"
    })
    const { colors, paletteName, emoji } = props.palette;
    const { id } = props;
    const { level, format } = state;
    const colorBoxes = colors[level].map(color => (
        <ColorBox
            background={color[format]}
            showLink={true}
            colorId={color.id}
            name={color.name}
            paletteId={id}
            key={color.id} />
    ));
    const changeLevel = (newLevel) => {
        setState({ ...state, level: newLevel });
    }
    const changeColorFormat = (value) => {
        setState({ ...state, format: value });
    }
    return (
        <div className='Palette'>
            <Navbar
                level={level}
                changeLevel={changeLevel}
                changeColorFormat={changeColorFormat}
                showingAllColors={true}
            />
            <div className='Palette-colors'>
                {/* bunch of color boxes */}
                {colorBoxes}
            </div>
            <PaletteFooter paletteName={paletteName} emoji={emoji} />
        </div>
    )
}

export default Palette;