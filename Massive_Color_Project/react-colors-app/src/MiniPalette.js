/** @jsxImportSource @emotion/react */
import miniPaletteCss from './styles/MiniPaletteStyles';
import DeleteIcon from '@mui/icons-material/Delete';

const MiniPalette = (props) => {
    const { paletteName, emoji, colors, handleClick, handleDelete, id } = props;
    const deletePalette = (e) => {
        e.stopPropagation();
        handleDelete(id);
    }
    const miniColorBoxes = colors.map(color => (
        <div
            css={miniPaletteCss.miniColor}
            style={{ backgroundColor: color.color }}
            key={color.name}
        />
    ));
    return (
        <div css={miniPaletteCss.root} onClick={handleClick}>
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
    )
}

export default MiniPalette;