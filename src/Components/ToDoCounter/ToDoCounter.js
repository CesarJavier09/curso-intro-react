import React from "react";
import './ToDoCounter.css';
import { useContext } from "react";
import { todoContext } from "../../TodoContext";

function ToDoCounter() {

    const {totalTodos, completedTodos} = useContext(todoContext);
    return (
        <h2 className="ToDoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

export {ToDoCounter};