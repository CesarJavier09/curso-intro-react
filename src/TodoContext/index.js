import React, { createContext } from "react";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const todoContext = createContext();

function TodoProvider(props){

    const {
        item: toDos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V3',[]);
      const [searchValue, setSearchValue] = useState('');
      const [openModal, setOpenModal] = useState(false);
      const completedTodos = toDos.filter(todo => !!todo.completed).length;
      const totalTodos = toDos.length;
      let searchedTodos = [];
    
      if(!searchValue.length >=1){
        searchedTodos = toDos;
      }else{
        searchedTodos = toDos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      }
    
      const completeTodos = (text) =>{
        const index = toDos.findIndex(todo => todo.text === text);
        const newTodos = [...toDos];
        newTodos[index].completed = true;
        saveTodos(newTodos);
      }
    
      const deleteTodos = (text) =>{
        const index = toDos.findIndex(todo => todo.text === text);
        const newTodos = [...toDos];
        newTodos.splice(index, 1);
        saveTodos(newTodos);
      }

      const addTodos = (text) =>{
        const newTodos = [...toDos];
        newTodos.push({
          text: text,
          completed: false,
        });
        saveTodos(newTodos);
      }

    return (
        <todoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal,
            addTodos,
        }}>
            {props.children}
        </todoContext.Provider>
    );
}

export { todoContext, TodoProvider };
