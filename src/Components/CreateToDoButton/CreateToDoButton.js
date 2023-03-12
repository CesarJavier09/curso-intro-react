import React from "react";
import './CreateToDoButton.css'

function CreateToDoButton({openModal,setOpenModal}) {

    const onClickButton = () =>{
        setOpenModal(!openModal);
    };

    return (
        <button 
        className="CreateTodoButton"
        onClick={() => onClickButton()}>
            +
        </button>
    );
}

export {CreateToDoButton};