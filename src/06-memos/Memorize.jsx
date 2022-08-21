import { useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './Small';

export const Memorize = () => {

    const { counter, increment } = useCounter();
    const [ show, setShow ] = useState(true);

    return (
        <>
            <h1>Memorize - Counter: <Small value={ counter } /></h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={ () => increment() } // Esta función la llamamos así porque tiene parametros entonces para que no escuche el evento sino que tome el parametro por defecto
            >
                +1
            </button>
            <button
                className='btn btn-outline-primary'
                onClick={ () => setShow( !show ) }
            >
                Show/Hide { JSON.stringify( show ) }
            </button>
        </>
    )
}
