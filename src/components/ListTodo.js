import React from "react";
import { useSelector } from "react-redux";

import classes from "./ListTodo.module.scss";
import ListTodoItem from "./ListTodoItem";

function ListTodo() {
  const todoListData = useSelector((state) => state.data.todoList);

  return (
    <ul className={classes["todos-container"]}>
      {todoListData.map((item) => (
        <ListTodoItem
          key={item.id}
          id={item.id}
          info={item.info}
          completed={item.completed}
        />
      ))}
    </ul>
  );
}

export default ListTodo;
