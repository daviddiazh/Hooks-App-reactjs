import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y })
        }

        document.addEventListener( 'mousemove', onMouseMove );

        return () => {
            document.removeEventListener( 'mousemove', onMouseMove );
        }
    }, [])
    

    return (
        <>
            <h4>Usuario ya existe!</h4>
            { JSON.stringify( coords ) }
        </>
    )
}
