import React, { useReducer } from 'react';
import { TodoAdd, TodoList, todoReducer } from './';

export const initialState = [
    {
        id: new Date().getTime(),
        description: 'Estudiar Ingles',
        done: false
    }
]

export const TodoApp = () => {
    
    const [ todos, dispatch ] = useReducer( todoReducer, initialState );

    const handleTodoAdd = (todo) => {
        const action = {
            type: '[TODO] - Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    return (
        <>
            {/* useReducer */}
            <h1>TodoApp: (10), <small>pendientes: 5</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={ todos } />
                </div>
                
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd onNewTodo={ handleTodoAdd } />
                </div>
            </div>
        </>
    )
}
