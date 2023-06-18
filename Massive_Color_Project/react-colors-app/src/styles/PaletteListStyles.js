import { css } from '@emotion/react';
export default {
    root: css({
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    }),
    container: css({
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap"
    }),
    nav: css({
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white"
    }),
    palettes: css({
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%"
    })
}