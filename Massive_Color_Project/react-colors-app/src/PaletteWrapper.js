import { generatePalette } from './colorHelpers';
import { useParams } from 'react-router-dom';
import seedColors from './seedColors';
import Palette from './Palette';

const findPalette = (palettes, id) => {
    return palettes.find(function (palette) {
        return palette.id === id;
    });
}

const PaletteWrapper = (props) => {
    const { id } = useParams();
    const { palettes } = props;
    const palette = generatePalette(findPalette(palettes, id));

    return <Palette palette={palette} id={id} />
}

export default PaletteWrapper;