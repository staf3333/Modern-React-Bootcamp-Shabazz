import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ColorBox = (props) => {
    const { name, background, paletteId, colorId } = props;
    const [copied, setCopied] = useState(false);
    // useEffect(() => {
    //     setTimeout(setCopied(false), 1500);
    // }, [copied])
    const changeCopyState = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }
    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div style={{ background: background }} className="ColorBox">
                <div style={{ background }} className={`copy-overlay ${copied && 'show'}`}></div>
                <div className={`copy-msg ${copied && 'show'}`}>
                    <h1>copied!</h1>
                    <p>{background}</p>
                </div>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span>{name}</span>
                    </div>
                    <button className='copy-button'>Copy</button>
                </div>
                <Link to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
                    <span className='see-more'>More</span>
                </Link>
            </div>
        </CopyToClipboard>
    )
}

export default ColorBox;

