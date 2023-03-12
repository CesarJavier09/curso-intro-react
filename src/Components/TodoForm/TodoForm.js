import React from "react";
import { useContext, useState } from "react";
import { todoContext } from "../../TodoContext";
import './TodoForm.css';

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = useState('');

    const {
        addTodos,
        openModal,
        setOpenModal,
    } = useContext(todoContext);

    const onInput = (event) =>{
        setNewTodoValue(event.target.value);
    };

    const onCancel = () =>{
        setOpenModal(!openModal);
        setNewTodoValue('');
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if(newTodoValue.length <= 0)return;
        addTodos(newTodoValue);
        setOpenModal(!openModal);
        setNewTodoValue('');
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                value={newTodoValue}
                placeholder="Cortar la cebolla para el almuerzo"
                onChange={onInput}
            />
            <div className="TodoForm-buttonContainer">
                <button 
                className="TodoForm-button TodoForm-button-cancel"
                type="button"
                onClick={onCancel}>
                    Cancelar
                </button>
                <button 
                className="TodoForm-button TodoForm-button-add"
                type="submit">
                    Añadir ToDo
                </button>
            </div>
        </form>
    );
}

export {TodoForm};