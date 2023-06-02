import logo from './logo.svg';
import React, { useEffect } from 'react';

const UseEffectExample = () => {
    useEffect(() => {
        console.log("Mounting...");
    });
    return (
        <h1>Use Effect Example!!!</h1>
    );
}

export default UseEffectExample;