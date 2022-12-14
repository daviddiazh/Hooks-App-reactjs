import { useState } from "react"


export const useCounter = ( initialState = 1 ) => {

    const [counter, setCounter] = useState( initialState );

    const increment = ( value = 1 ) => {
        setCounter(counter + value);
    }

    const decrement = ( value = 1 ) => {
        if( counter === 1 ) return;
        
        setCounter(counter - value);
    }

    const reset = () => {
        setCounter(initialState);
    }
    
    return {
        counter,
        increment,
        decrement,
        reset,
    }
}
