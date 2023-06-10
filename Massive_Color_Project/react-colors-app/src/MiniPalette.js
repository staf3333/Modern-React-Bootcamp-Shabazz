/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const miniPaletteCss = {
    root: css({
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        }
    }),
    colors: css({
        backgroundColor: "#dae1e4",
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    }),
    title: css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    }),
    emoji: css({
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    }),
    miniColor: css({
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
    })
}

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