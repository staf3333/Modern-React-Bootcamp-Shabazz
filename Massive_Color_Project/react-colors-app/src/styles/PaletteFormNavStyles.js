import { css } from '@emotion/react';

const styles = {
    root: css({
        display: "flex"
    }),
    navBtns: css({
        marginRight: "1rem",
        "& a": {
            textDecoration: "none"
        }
    }),
    button: css({
        margin: "0 0.5rem",
    })
}

export default styles;