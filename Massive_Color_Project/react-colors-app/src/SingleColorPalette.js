import { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';

const SingleColorPalette = (props) => {
    const [state, setState] = useState({
        format: "hex"
    })
    const { palette, colorId, paletteId } = props;
    const { paletteName, emoji } = palette;
    const gatherShades = (palette, colorToFilterBy) => {
        //return all shades of given color
        let shades = [];
        let allColors = palette.colors;
        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            );
        }
        return shades.slice(1);
    }
    const _shades = gatherShades(palette, colorId);
    const changeColorFormat = (value) => {
        setState({ ...state, format: value });
    }
    const { format } = state;
    const colorBoxes = _shades.map(color => (
        <ColorBox
            key={color.name}
            name={color.name}
            background={color[format]}
        />
    ))
    return (
        <div className='SingleColorPalette Palette'>
            <Navbar
                changeColorFormat={changeColorFormat}
                showingAllColors={false}
            />
            <div className='Palette-colors'>
                {colorBoxes}
                <div className='go-back ColorBox'>
                    <Link to={`/palette/${paletteId}`} className='back-button'>GO BACK</Link>
                </div>
            </div>
            <PaletteFooter paletteName={paletteName} emoji={emoji} />
        </div>
    )
}
export default SingleColorPalette;