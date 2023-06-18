/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import styles from "./styles/PaletteListStyles";


const PaletteList = (props) => {
    const { palettes } = props;
    const navigate = useNavigate();

    const goToPalette = (id) => {
        navigate(`/palette/${id}`);
    }

    return (
        <div css={styles.root}>
            <div css={styles.container}>
                <nav css={styles.nav}>
                    <h1>React Colors</h1>
                </nav>
                <div css={styles.palettes}>
                    {palettes.map(palette => (
                        <MiniPalette {...palette} key={palette.id} handleClick={() => goToPalette(palette.id)} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PaletteList;