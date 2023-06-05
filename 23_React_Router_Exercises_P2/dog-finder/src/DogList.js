import './DogList.css';
import { Link } from 'react-router-dom';

const DogList = (props) => {
    return (
        <div className="DogList">
            <h1 className="display-1 text-center my-4">Dog List!</h1>
            <div className="row">
                {props.dogs.map(d => (
                    <div className="DogList-dog col-lg-4 text-center" key={d.name}>
                        <img src={d.src} alt={d.name} />
                        <h3><Link className='underline' to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link></h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DogList;