/** @jsxImportSource @emotion/react */
import { useNavigate, Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import styles from "./styles/PaletteListStyles";


const PaletteList = (props) => {
    const { palettes, deletePalette } = props;
    const navigate = useNavigate();

    const goToPalette = (id) => {
        navigate(`/palette/${id}`);
    }

    return (
        <div css={styles.root}>
            <div css={styles.container}>
                <nav css={styles.nav}>
                    <h1>React Colors</h1>
                    <Link to='/palette/new'>Create Palette</Link>
                </nav>
                <div css={styles.palettes}>
                    {palettes.map(palette => (
                        <MiniPalette
                            {...palette}
                            key={palette.id}
                            handleClick={() => goToPalette(palette.id)}
                            handleDelete={deletePalette}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PaletteList;