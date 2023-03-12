import React from "react";
import './ToDoItem.css';

function ToDoItem({text, completed, onCompleted, onDeleted}){

    return(
        <li className="TodoItem">
            <span onClick={onCompleted} className={`Icon Icon-check ${completed ? 'Icon-check--active' : ''}`}>
                √
            </span>
            <p className={`TodoItem-p ${completed ? 'TodoItem-p--complete' : ''}`}>
                {text}
            </p>
            <span onClick={onDeleted} className="Icon Icon-delete">
                X
            </span>
        </li>
    );
}

export {ToDoItem};