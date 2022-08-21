import React from 'react';

// NOTA: Las funciones y objectos en JS suelen apuntar siempre a diferentes espacios en memoria, por lo que el uso del memo en este componente es para guardarlo en el mismo espacio.
export const ShowIncrement = React.memo(({ increment }) => {

    console.log('Me volví a dibujar :(')

    return (
        <>
            <button
                className='btn btn-primary'
                onClick={ () => {
                    increment( 10 );
                }}
            >
                +1
            </button>
        </>
    )
});