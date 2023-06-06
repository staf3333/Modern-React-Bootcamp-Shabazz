import 'rc-slider/assets/index.css';
import './Navbar.css'
import Slider from 'rc-slider';

const Navbar = (props) => {
    const { level, changeLevel } = props;
    return (
        <nav className="Navbar">
            <div className="Navbar-logo">
                <a href="/">reactcolorpicker</a>
            </div>
            <div className='slider-container'>
                <span>level: {level}</span>
                <div className='slider'>
                    <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={changeLevel}
                        trackStyle={{ backgroundColor: "transparent" }}
                        railStyle={{ height: "8px" }}
                        handleStyle={{
                            backgroundColor: "green",
                            outline: "none",
                            border: "2px solid green",
                            boxShadow: "none",
                            width: "13px",
                            height: "13px",
                            marginLeft: "-7px",
                            marginTop: "-3px"
                        }}
                        activeDotStyle={{
                            borderColor: 'green',
                            boxShadow: 'none',
                            outline: 'none'
                        }}
                    />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;