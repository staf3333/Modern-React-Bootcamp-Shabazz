import logo from './logo.svg';
import React, { useState } from 'react';

const StateExample = () => {
    const [change, setChange] = useState(true);
    return (
        <div>
            <button onClick={() => setChange(!change)}>Click here</button>
            {change ? <h1>Welcome to GeeksForGeeks, change is true</h1> :
                <h1>A Computer Science portal for Geeks, change is false</h1>}
        </div>
    );
}

export default StateExample;