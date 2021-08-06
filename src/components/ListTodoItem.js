import React, { useState } from "react";
import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";

import classes from "./ListTodoItem.module.scss";
import { FaTimes, FaCheck, FaEdit } from "react-icons/fa";
import { dataActions } from "../store/data-slice";

function ListTodoItem({ id, info, completed }) {
  const dispatch = useDispatch();

  const finishTodoHandler = () => {
    dispatch(dataActions.toggleCompleteTodo({ id: id, completed: !completed }));
  };

  const removeTodoHandler = () => {
    dispatch(dataActions.removeTodo({ id: id }));
  };

  return (
    <IconContext.Provider value={{ className: classes["todo-icon"] }}>
      <li
        className={
          completed
            ? classes["todo-container-completed"]
            : classes["todo-container-uncompleted"]
        }
      >
        <span
          className={
            completed
              ? classes["todo-info-completed"]
              : classes["todo-info-uncompleted"]
          }
        >
          {`${info} ${completed ? "(completed)" : ""}`}
        </span>
        <div>
          <FaCheck onClick={finishTodoHandler} />
          <FaEdit />
          <FaTimes onClick={removeTodoHandler} />
        </div>
      </li>
    </IconContext.Provider>
  );
}

export default ListTodoItem;
