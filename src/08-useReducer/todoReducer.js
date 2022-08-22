
export const todoReducer = ( initialState = [], action ) => {

    switch( action.type ){
        case 'ABC':
            throw new Error('Action.type = ABC No esta implementada.');

        default:
            return initialState;
    }
    
}



