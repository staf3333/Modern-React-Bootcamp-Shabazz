import { css } from '@emotion/react';

export default {
    root: css({
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
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