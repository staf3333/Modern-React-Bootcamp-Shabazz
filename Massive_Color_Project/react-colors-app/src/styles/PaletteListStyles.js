import { css } from '@emotion/react';
import sizes from './sizes';
import confettiDoodles from './confettiDoodles.svg';

const styles = {
    root: css({
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#3318AA",
        /* background by SVGBackgrounds.com */
        backgroundImage: `url(${confettiDoodles})`,
        backgroundAttachment: "fixed",
        overflow: "scroll"
    }),
    transitionStyles: css({
        ".fade-exit": {
            opacity: 1
        },
        ".fade-exit-active": css({
            opacity: 0,
            transition: "opacity 500ms ease-out"
        })
    }),
    heading: css({
        fontSize: "2rem"
    }),
    container: css({
        width: "60%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("xl")]: {
            width: "80%"
        },
        [sizes.down("xs")]: {
            width: "75%"
        }
    }),
    nav: css({
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white",
        alignItems: "center",
        "& a": {
            color: "white"
        }
    }),
    palettes: css({
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2.5rem",
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(2, 50%)"
        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1, 100%)",
            gap: "1.4rem"
        }
    })
}

export default styles;