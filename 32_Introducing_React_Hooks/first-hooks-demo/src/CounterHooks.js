import { useState } from "react";

function CounterHooks() {
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>The Count Is: {count}</h1>
            <button onClick={incrementCount}>Add 1</button>
        </div>
    );
}

export default CounterHooks;