import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FoodSearch = () => {
    const [query, updateQuery] = useState("");
    let navigate = useNavigate();
    function handleChange(evt) {
        updateQuery(evt.target.value);
    }
    function handleClick() {
        //do something
        alert("SAVED YOUR FOOD TO THE DATABASE");

        //then redirect
        navigate(`/food/${query}`);
    }
    return (
        <div>
            <h1>Search For A Food</h1>
            <input type="text" placeholder="search for a food" value={query} onChange={handleChange} />
            <Link to={`/food/${query}`}>Go!</Link>
            <button onClick={handleClick}>Save New Food!</button>
        </div>
    )
}

export default FoodSearch;