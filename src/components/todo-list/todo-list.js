import React from "react";

import TodoListItem from "../todo-list-item";
import './todo-list.css';

const TodoList =  ({todos, onDeleted,
                    onImportant, onDone})=>{
    // console.log(todos)
      const elements = todos.map((item)=>{
      const {id, ...restItems} = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem 
                {...restItems}
                // onDeleted ={()=>console.log('Deleted')}
                onDeleted ={()=> onDeleted(id)}
                onImportant = {()=> onImportant(id)}
                onDone = {()=> onDone(id)}
                    // label={item.label}
                    // mapped={item.mapped}
                    // important={item.important}
                    /> 
            </li>
        )
    })

    return (
    <ul className="list-group todo-list">
      {/* <li><TodoListItem label="Drink abobusfactor" /> </li>
      <li><TodoListItem label="Run abobusfactor" important/> </li> */}
      {elements}
    </ul>
    );
  };
  
export default TodoList;