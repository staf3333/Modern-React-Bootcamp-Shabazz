/** @jsxImportSource @emotion/react */
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './styles/DraggableColorBoxStyles';

const DraggableColorBox = (props) => {
    const { handleClick, name, color } = props;
    return (
        <div css={styles.root} style={{ backgroundColor: color }}>
            <div css={styles.boxContent}>
                <span>{name}</span>
                <DeleteIcon css={styles.deleteIcon} onClick={handleClick} />
            </div>
        </div>
    )
}

export default DraggableColorBox;