import { generatePalette } from './colorHelpers';
import { useParams } from 'react-router-dom';
import seedColors from './seedColors';
import SingleColorPalette from './SingleColorPalette';

const findPalette = id => {
    return seedColors.find(function (palette) {
        return palette.id === id;
    });
}

const SingleColorPaletteWrapper = () => {
    const { paletteId, colorId } = useParams();
    const palette = generatePalette(findPalette(paletteId));

    return <SingleColorPalette palette={palette} colorId={colorId} showLink={false} />
}

export default SingleColorPaletteWrapper;