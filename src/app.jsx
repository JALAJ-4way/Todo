import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    if(inputList !== ""){
        setItems((oldItems) => {
            return [...oldItems, inputList];
          });
    }
    else{
        alert( "Add task first!");
    }    
    setInputList("");
  };
  const deleteItems = (id) => {
    alert('Have you completed this task !');

    setItems((oldItems) => {
        return oldItems.filter((arrElem, index) => {
            return index !== id;
        });
    });
};
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1 className="h1">Todo List</h1>
          <br />
          <input
            type="text"
            className="input"
            placeholder="Enter task here"
            onChange={itemEvent}
            value={inputList}
          />
          <button className="button" onClick={listOfItems}>
            +
          </button>
          <ol className="ol">
            {items.map((itemval, index) => {
              return <ToDoList 
              text={itemval}
              key={index}
              id={index}
              onSelect={deleteItems} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
