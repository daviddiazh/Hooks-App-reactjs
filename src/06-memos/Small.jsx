import React, { memo } from 'react';

// Con el metodo memo de react podemos memorizar el componente y evitamos que siempre se esta renderizando cuando hayan cambios en el componente padre en este caso el <Memorize /> y solo se redibujara este componente cuando las props cambien y de esta manera podremos optimizar un poco nuestra app evitando renderizados innecesarios.
export const Small = memo(({ value }) => {

    console.log('El <Small /> se redibujo :(')

    return (
        <small>{ value }</small>
    )
})
