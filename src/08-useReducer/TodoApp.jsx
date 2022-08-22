import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Estudiar React',
        done: false
    },
    {
        id: new Date().getTime() * 5,
        description: 'Estudiar Ingles',
        done: false
    }
]

export const TodoApp = () => {
    
    const [ todos, dispatch ] = useReducer( todoReducer, initialState );

    return (
        <>
            <h1>TodoApp - useReducer</h1>
            <hr />


        </>
    )
}
