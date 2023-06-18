/** @jsxImportSource @emotion/react */
import miniPaletteCss from './styles/MiniPaletteStyles'

const MiniPalette = (props) => {
    const { paletteName, emoji, colors, handleClick } = props;
    const miniColorBoxes = colors.map(color => (
        <div
            css={miniPaletteCss.miniColor}
            style={{ backgroundColor: color.color }}
            key={color.name}
        />
    ))
    return (
        <div css={miniPaletteCss.root} onClick={handleClick}>
            <div css={miniPaletteCss.colors}>
                {miniColorBoxes}
            </div>
            <h5 css={miniPaletteCss.title}>{paletteName} <span>{emoji}</span></h5>
        </div>
    )
}

export default MiniPalette;