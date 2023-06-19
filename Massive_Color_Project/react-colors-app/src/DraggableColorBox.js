/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import DeleteIcon from '@mui/icons-material/Delete';

const styles = {
    root: css({
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)"
        }
    }),
    boxContent: css({
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "rgba(0, 0, 0, 0.5)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between"
    }),
    deleteIcon: css({
        transition: "all 0.3s ease-in-out"
    })
};

const DraggableColorBox = (props) => {
    return (
        <div css={styles.root} style={{ backgroundColor: props.color }}>
            <div css={styles.boxContent}>
                <span>{props.name}</span>
                <DeleteIcon css={styles.deleteIcon} />
            </div>
        </div>
    )
}

export default DraggableColorBox;