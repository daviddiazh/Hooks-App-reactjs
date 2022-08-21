import React, { useState, useRef, useLayoutEffect } from "react";

export const Quote = ({ quote, author }) => {

    const [ boxSize, setBoxSize ] = useState({
        width: 0,
        height: 0
    });

    const pRef = useRef();

    // El useLayoutEffect funciona como el useEffect, pero React recomienda usar el useEffect
    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect(); //Aquí capturamos el ancho y largo del elemento
        setBoxSize({ width, height });
    }, [quote]);

    return (
        <>
            <blockquote className='blockquote text-end' key={ quote }>
                <p ref={ pRef } className='mb-1'>{ quote }</p>
                <footer className='blockquote-footer'> { author }</footer>
            </blockquote>

            <code>{ JSON.stringify( boxSize ) }</code>
            <br />
            <br />
        </>
    )
}
