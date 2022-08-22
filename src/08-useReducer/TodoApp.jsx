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
            {/* useReducer */}
            <h1>TodoApp: (10), <small>pendientes: 5</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        {
                            todos.map( todo => (
                                <li key={ todo.id } className="list-group-item d-flex justify-content-between">
                                    <span className="align-self-center">{todo.description}</span>
                                    <button className="btn btn-danger">Borrar</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form>
                        <input
                            placeholder="Agrega tu tarea aquí"
                            type="text"
                            className="form-control"
                        />

                        <button
                            type="submit"
                            className="btn btn-primary mt-2"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
