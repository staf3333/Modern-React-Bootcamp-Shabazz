import { useParams, Link } from 'react-router-dom';
import './DogDetails.css';

const DogDetails = (props) => {
    let { dogName } = useParams();
    let currDog = props.dogs.find(
        dog => dog.name.toLowerCase() === dogName.toLowerCase()
    );
    return (
        <div className='DogDetails row justify-content-center mt-5'>
            <div className='col-11 col-lg-5'>
                <div className='DogDetails-card card'>
                    <img className="card-img-top" src={currDog.src} alt={currDog.name} />
                    <div className='card-body'>
                        <h2 className='card-title'>{currDog.name}</h2>
                        <h3 className='card-subtitle text-muted'>{currDog.age} years old</h3>
                    </div>
                    <ul className='list-group list-group-flush'>
                        {currDog.facts.map((fact, i) => (
                            <li className='list-group-item' key={i}>{fact}</li>
                        ))}
                    </ul>
                    <div className='card-body'>
                        <Link to='/dogs' className='btn btn-info'>Go Back</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DogDetails;