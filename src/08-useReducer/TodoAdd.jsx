import { useForm } from "../hooks/useForm"
import { initialState } from "./TodoApp";

export const TodoAdd = ({ onNewTodo }) => {

    const { formState, onInputChange, onResetForm, description } = useForm({
        description: '',
    }); 

    const onFormSubmit = (event) => {
        event.preventDefault();
        if( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }

        onNewTodo( newTodo );
        onResetForm();
    }

    return (
        <form onSubmit={ onFormSubmit }>
            <input
                type="text"
                placeholder="Agrega tu tarea aquí"
                name="description"
                value={ description }
                onChange={ onInputChange }
                className="form-control"
            />

            <button
                type="submit"
                className="btn btn-primary mt-2"
            >
                Agregar
            </button>
        </form>
    )
}
