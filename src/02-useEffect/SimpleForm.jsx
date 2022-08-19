import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: ''
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target

        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect(() => {
        console.log('useEffect called!');
    }, []); // Como acá no hay dependencias por cualquier acción realizada, se redibuja el componente con este useEffect

    useEffect(() => {
        console.log('formState called!');
    }, [ formState ]); // Como acá tenemos por dependencia el formState, solo se redibuja el componente cuando hayan cambios en el formState

    useEffect(() => {
        console.log('email called!');
    }, [ email ]); // Como acá tenemos por dependencia el email, solo se redibuja el componente cuando hayan cambios en el email y por ende en el formState
    

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input 
                type='text'
                className='form-control'
                placeholder='Username'
                name='username'
                value={username}
                onChange={ onInputChange }
            />

            <input 
                type='email'
                className='form-control mt-2'
                placeholder='Email'
                name='email'
                value={email}
                onChange={ onInputChange }
            />

            { ( username === 'david' ) && <Message /> }
        </>
    )
}
