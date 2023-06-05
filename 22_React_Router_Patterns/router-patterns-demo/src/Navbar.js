import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    function handleLogin() {
        alert("LOGGED YOU IN");
        navigate("/food/salmon");
    }
    function handleBack() {
        navigate(-2);
    }
    return (
        <div>
            <button onClick={handleLogin}>Log In</button>
            <button onClick={handleBack}>Go Back</button>
        </div>
    )
}

export default Navbar;