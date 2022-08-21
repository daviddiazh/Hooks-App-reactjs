
const initialState = [{
    id: 1,
    todo: 'Hacer tareas de ingles',
    done: false,
}];


const todoReducer = ( state = initialState, action = {} ) => {

    if ( action.type === '[TODO] - AddTodo' ) return [ ...state, action.payload ]

    return state;
}

const newTodo = {
    id: 2,
    todo: 'Hacer tareas de front-end',
    done: false,
}

const addTodoAction = {
    type: '[TODO] - AddTodo',
    payload: newTodo,
}

let todo = todoReducer( initialState, addTodoAction );

console.log(todo)