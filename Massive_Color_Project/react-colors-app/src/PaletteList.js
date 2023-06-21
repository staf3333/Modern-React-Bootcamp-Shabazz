/** @jsxImportSource @emotion/react */
import { useNavigate, Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import styles from "./styles/PaletteListStyles";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Global } from '@emotion/react';


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
                    <h1 css={styles.heading}>React Colors</h1>
                    <Link to='/palette/new'>Create Palette</Link>
                </nav>
                <TransitionGroup css={styles.palettes}>
                    <Global styles={styles.transitionStyles} />
                    {palettes.map(palette => (
                        <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                            <MiniPalette
                                {...palette}
                                key={palette.id}
                                handleClick={() => goToPalette(palette.id)}
                                handleDelete={deletePalette}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        </div>
    )
}

export default PaletteList;