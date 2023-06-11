import React from "react";

import { useSelector } from "react-redux";
import TodoItem from "../Todoitem/Todoitem";

const TodoList = () => {
  const taskobj = useSelector((state) => state.todos.data);
  const taskItems = taskobj.map((task) => {
    
    return(
     <TodoItem task={task} key={task.id} />
  

    );
  });
  

  return <div>{taskItems}</div>;
};

export default TodoList;