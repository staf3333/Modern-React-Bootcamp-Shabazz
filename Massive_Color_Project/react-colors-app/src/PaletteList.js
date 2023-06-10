import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import TestEmotion from './TestEmotion';

const PaletteList = (props) => {
    const { palettes } = props;
    return (
        <div>
            <h1>React Colors</h1>
            {palettes.map(palette => (
                <MiniPalette {...palette} />
            ))}
        </div>
    )
}

export default PaletteList;