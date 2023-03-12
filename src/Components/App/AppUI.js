import React from "react";
import { ToDoCounter } from '../ToDoCounter/ToDoCounter';
import { ToDoSearch } from '../ToDoSearch/ToDoSearch';
import { ToDoList } from '../ToDoList/ToDoList';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton/CreateToDoButton';
import { todoContext } from "../../TodoContext";
import { useContext } from "react";
import { Modal } from "../Modal/AddTodo";
import { TodoForm } from "../TodoForm/TodoForm";

function AppUI(){

    const {
        error,
        loading,
        searchedTodos,
        completeTodos,
        deleteTodos,
        openModal,
        setOpenModal,
    } = useContext(todoContext);

    return(
        <React.Fragment>
            <ToDoCounter/>
            <ToDoSearch/>
            <todoContext.Consumer>
                {() => (
                    <React.Fragment>
                        <ToDoList>
                            {error && <p>Desespérate, hubo un error</p>}
                            {loading && <p>Estámos cargando, no desesperes...</p>}
                            {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
                            {searchedTodos.map(todo => (
                                <ToDoItem 
                                    key={todo.text} 
                                    text={todo.text} 
                                    completed={todo.completed}
                                    onCompleted={() => completeTodos(todo.text)}
                                    onDeleted={() => deleteTodos(todo.text)}
                                />
                            ))}
                        </ToDoList>
                        {!!openModal && (
                            <Modal>
                                <TodoForm/>
                            </Modal>
                        )}
                    </React.Fragment>
                )}
            </todoContext.Consumer>
            <CreateToDoButton
            setOpenModal={setOpenModal}
            openModal={openModal}/>
        </React.Fragment>
    );
}

export {AppUI};