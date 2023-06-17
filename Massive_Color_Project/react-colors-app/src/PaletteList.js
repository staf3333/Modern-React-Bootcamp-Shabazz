/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import MiniPalette from './MiniPalette';

const styles = {
    root: css({
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    }),
    container: css({
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap"
    }),
    nav: css({
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white"
    }),
    palettes: css({
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%"
    })
}

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