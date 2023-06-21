/** @jsxImportSource @emotion/react */
import miniPaletteCss from './styles/MiniPaletteStyles';
import DeleteIcon from '@mui/icons-material/Delete';
import { memo } from 'react';

const MiniPalette = memo((props) => {
    const { paletteName, emoji, colors, handleClick, openDialog, id } = props;
    console.log("RENDERING: ", paletteName);
    const deletePalette = (e) => {
        e.stopPropagation();
        openDialog(id);
    }
    const miniColorBoxes = colors.map(color => (
        <div
            css={miniPaletteCss.miniColor}
            style={{ backgroundColor: color.color }}
            key={color.name}
        />
    ));
    return (
        <div css={miniPaletteCss.root} onClick={() => handleClick(id)}>
            <DeleteIcon
                css={miniPaletteCss.deleteIcon}
                style={{ transition: "all 0.3s ease-in-out" }}
                onClick={deletePalette}
            />
            <div css={miniPaletteCss.colors}>
                {miniColorBoxes}
            </div>
            <h5 css={miniPaletteCss.title}>{paletteName} <span>{emoji}</span></h5>
        </div>
    );
},
    (prevProps, nextProps) => {
        return JSON.stringify(prevProps) === JSON.stringify(nextProps);
    }
);

export default MiniPalette;