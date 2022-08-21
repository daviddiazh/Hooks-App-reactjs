import { useState, useMemo } from 'react';
import { useCounter } from '../hooks';

const heavyStuffy = ( iterationNumber = 100 ) => {
    for(let i = 0; i < iterationNumber; i++){
        console.log('Ahí vamos...');
    }

    return `${ iterationNumber } iteraciones realizadas!`;
}

export const MemoHook = () => {

    const { counter, increment } = useCounter();
    const [ show, setShow ] = useState(true);

    const memorizedValue = useMemo( () => heavyStuffy(counter), [counter]);
    // Con este Hook podemos memorizar un valor y evitar renderizados innecesarios que pueden ser pesados y que solo se haga ese renderizado cuando cambie el estado, ademas de poderle definir dependencias

    return (
        <>
            <h1>MemoHook - Counter: <small>{ counter }</small></h1>
            <hr />

            <h4>{ memorizedValue }</h4>

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
