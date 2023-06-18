/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const styles = {
    root: css({
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px"
    })
}

const DraggableColorBox = (props) => {
    return (
        <div css={styles.root} style={{ backgroundColor: props.color }}>
            {props.color}
        </div>
    )
}

export default DraggableColorBox;