import { useState } from "react";

function useToggleState(initialVal = false) {
    // call useState
    const [state, setState] = useState(initialVal);
    const toggle = () => {
        setState(!state);
    }
    return [state, toggle];
}

export default useToggleState;

// return piece of state and a function to toggle it