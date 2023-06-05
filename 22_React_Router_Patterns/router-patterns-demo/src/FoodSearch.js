import { useState } from 'react';
import { Link } from 'react-router-dom';

const FoodSearch = () => {
    const [query, updateQuery] = useState("");
    function handleChange(evt) {
        updateQuery(evt.target.value);
    }
    return (
        <div>
            <h1>Search For A Food</h1>
            <input type="text" placeholder="search for a food" value={query} onChange={handleChange} />
            <Link to={`/food/${query}`}>Go!</Link>
        </div>
    )
}

export default FoodSearch;