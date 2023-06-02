import logo from './logo.svg';
import React, { useState } from 'react';
import props from 'prop-types';

const Example = (props) => {
    return (
        <h1>{props.data}</h1>
    );
}

function PropsExample() {
    const [change, setChange] = useState(true);
    return (
        <div>
            <button onClick={() => setChange(!change)}>Click here</button>
            <Example data="Testing" />
            {change ? <Example data="GeekForGeeks Example" /> : <Example data="A computer science portal for geeks" />}
            <h1>There should be something here</h1>
        </div>
    );
}

export default PropsExample;