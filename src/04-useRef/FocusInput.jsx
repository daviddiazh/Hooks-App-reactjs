import { useRef } from 'react';

export const FocusInput = () => {

    const inputRef = useRef();
    
    const onClick = () => {
        inputRef.current.select();
        // Con el inputRef.current.select() vamos a hacer el focus al input, permitiendo escribir a su vez.
    }

    return (
        <>
            <h1>Focus Input</h1>
            <hr />

            <input 
                ref={ inputRef }
                type="text"
                className="form-control"
                placeholder="Username"
            />

            <button 
                className="btn btn-primary mt-2" 
                onClick={ onClick }
            >
                Focus Input
            </button>
        </>
    )
}
