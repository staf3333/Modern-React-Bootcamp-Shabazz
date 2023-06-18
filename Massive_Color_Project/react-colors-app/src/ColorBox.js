import './styles/ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';

const ColorBox = (props) => {
    const { name, background, paletteId, colorId, showLink } = props;
    const [copied, setCopied] = useState(false);
    const changeCopyState = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }
    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.5;

    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div style={{ background: background }} className="ColorBox">
                <div style={{ background }} className={`copy-overlay ${copied && 'show'}`}></div>
                <div className={`copy-msg ${copied && 'show'}`}>
                    <h1>copied!</h1>
                    <p className={isLightColor && "dark-text"}>{background}</p>
                </div>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span className={isDarkColor && "light-text"}>{name}</span>
                    </div>
                    <button className={`copy-button ${isLightColor && "dark-text"}`}>Copy</button>
                </div>
                {showLink && (
                    <Link to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
                        <span className={`see-more ${isLightColor && "dark-text"}`}>MORE</span>
                    </Link>
                )}

            </div>
        </CopyToClipboard>
    )
}

export default ColorBox;

