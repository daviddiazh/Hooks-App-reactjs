import React,{ useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [ counter, setCounter ] = useState(1);

    // Con el useCallback podemos memorizar el valor de una *función* guardando la misma función en un mismo espacio en memoria.
    const incrementFather = useCallback(() => {
        setCounter(counter + 1); // Al tenerlo de esta manera lo que va a pasar es que al hacer el primer onClick se va a memorizar el valor del counter en esta función y luego al hacer un click va a seguir manteniendo el estado en el mismo valor.

        setCounter( value => value + 1 ); // Y de esta manera podemos hacer el set del estado y memorizar el valor de la función luego de cada click.
        console.log('setCounter( value => value + 1 );')
    }, []);

    return (
        <>
            <h1>useCallback Hook - Counter: { counter }</h1>
            <hr/> 

            <ShowIncrement increment={ incrementFather } />
        </>
    )
}
