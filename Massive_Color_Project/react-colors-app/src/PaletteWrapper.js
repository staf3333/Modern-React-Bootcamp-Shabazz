import { generatePalette } from './colorHelpers';
import { useParams } from 'react-router-dom';
import seedColors from './seedColors';
import Palette from './Palette';

const findPalette = id => {
    return seedColors.find(function (palette) {
        return palette.id === id;
    });
}

const PaletteWrapper = () => {
    const { id } = useParams();
    const palette = generatePalette(findPalette(id));

    return <Palette palette={palette} id={id} />
}

export default PaletteWrapper;