import { generatePalette } from './colorHelpers';
import { useParams } from 'react-router-dom';
import seedColors from './seedColors';
import SingleColorPalette from './SingleColorPalette';

const findPalette = (palettes, id) => {
    return palettes.find(function (palette) {
        return palette.id === id;
    });
}

const SingleColorPaletteWrapper = (props) => {
    const { paletteId, colorId } = useParams();
    const { palettes } = props;
    const palette = generatePalette(findPalette(palettes, paletteId));

    return <SingleColorPalette palette={palette} paletteId={paletteId} colorId={colorId} showLink={false} />
}

export default SingleColorPaletteWrapper;