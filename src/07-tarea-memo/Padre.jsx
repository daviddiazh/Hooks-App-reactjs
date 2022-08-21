import React, { useCallback, useState } from 'react';
import { Hijo } from './';

export const Padre = () => {

    const numeros = [ 2, 4, 6, 8, 10];
    const [ valor, setValor ] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }

    const increment = useCallback(( num ) => {
        setValor( value => value + num );
        console.log('setValor( value => value + num );');
    }, []);

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ increment }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
