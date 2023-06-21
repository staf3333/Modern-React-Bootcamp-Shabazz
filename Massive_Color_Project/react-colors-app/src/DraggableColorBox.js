/** @jsxImportSource @emotion/react */
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './styles/DraggableColorBoxStyles';
import chroma from 'chroma-js';
import { css } from '@emotion/react';


const conditionalStyles = ({ isDarkColor }) => css`
    ${isDarkColor === true &&
    `
        color: rgba(255,255,255,0.8);
    `}
`;

const DraggableColorBox = (props) => {
    const { handleClick, name, color } = props;
    const isDarkColor = chroma(color).luminance() <= 0.08;
    console.log(isDarkColor)
    return (
        <div css={styles.root} style={{ backgroundColor: color }}>
            <div css={styles.boxContent}>
                <span css={conditionalStyles({ isDarkColor })}>{name}</span>
                <DeleteIcon css={styles.deleteIcon} onClick={handleClick} />
            </div>
        </div>
    )
}

export default DraggableColorBox;