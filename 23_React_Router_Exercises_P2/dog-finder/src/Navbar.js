import { NavLink, Link } from 'react-router-dom';

const Navbar = (props) => {
    let dogLinks = props.dogs.map(dog => (
        <li className="nav-item" key={dog.name}>
            <NavLink className="nav-link" to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink>
        </li>
    ));
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/dogs">
                Dog App
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink end to='/dogs' className="nav-link">Home</NavLink>
                    </li>
                    {dogLinks}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;