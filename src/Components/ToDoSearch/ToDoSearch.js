import React from "react";
import './ToDoSearch.css';
import { useContext } from "react";
import { todoContext } from "../../TodoContext";

function ToDoSearch() {

    const {
        searchValue,
        setSearchValue 
    } = useContext(todoContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <React.Fragment>
            <input 
            className="TodoSearch" 
            value={searchValue}
            placeholder="Cebolla"
            onChange={onSearchValueChange}
            />
        </React.Fragment>
    );
}

export {ToDoSearch};