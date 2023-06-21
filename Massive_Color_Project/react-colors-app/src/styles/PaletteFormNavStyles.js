import { css } from '@emotion/react';
import sizes from './sizes';

const styles = {
    root: css({
        display: "flex"
    }),
    navBtns: css({
        marginRight: "1rem",
        "& a": {
            textDecoration: "none"
        },
        [sizes.down("xs")]: {
            marginRight: 0
        }
    }),
    button: css({
        margin: "0 0.5rem",
        [sizes.down("xs")]: {
            margin: "0 0.2rem",
            padding: "0.3rem"
        }
    })
}

export default styles;