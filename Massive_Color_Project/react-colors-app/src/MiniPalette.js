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
        backgroundColor: "grey"
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
    })
}

const MiniPalette = (props) => {
    const { paletteName, emoji } = props;
    return (
        <div css={miniPaletteCss.root}>
            <div css={miniPaletteCss.colors} />
            <h5 css={miniPaletteCss.title}>{paletteName} <span>{emoji}</span></h5>
        </div>
    )
}

export default MiniPalette;