import React, { useState } from "react";
import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";

import classes from "./ListTodoItem.module.scss";
import { FaTimes, FaCheck, FaEdit, FaArrowLeft } from "react-icons/fa";
import { dataActions } from "../store/data-slice";

function ListTodoItem({ id, info, completed }) {
  const dispatch = useDispatch();

  const [showEdit, setShowEdit] = useState(false);
  const [editInput, setEditInput] = useState("");

  const finishTodoHandler = () => {
    dispatch(dataActions.toggleCompleteTodo({ id: id, completed: !completed }));
  };

  const removeTodoHandler = () => {
    dispatch(dataActions.removeTodo({ id: id }));
  };

  const toggleEditHandler = () => {
    setShowEdit(!showEdit);
  };

  const inputEditHandler = (e) => {
    setEditInput(e.target.value);
  };

  const backHandler = () => {
    setShowEdit(!showEdit);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch(dataActions.editTodo({ id: id, info: editInput }));

    setShowEdit(!showEdit);
  };

  const list = (
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
        <FaEdit onClick={toggleEditHandler} />
        <FaTimes onClick={removeTodoHandler} />
      </div>
    </li>
  );

  const edit = (
    <li className={classes["todo-edit-container"]}>
      <form onSubmit={submitFormHandler} className={classes["todo-edit-form"]}>
        <input
          type="text"
          name="listInfo"
          placeholder="Edit a todo..."
          value={editInput}
          onChange={inputEditHandler}
          className={classes["todo-edit-input"]}
        />
        <div className={classes["todo-edit-btn-container"]}>
          <button className={classes["todo-btn"]}>Save Change</button>
          <FaArrowLeft
            className={classes["todo-back-btn"]}
            onClick={backHandler}
          />
        </div>
      </form>
    </li>
  );

  return (
    <IconContext.Provider value={{ className: classes["todo-icon"] }}>
      {showEdit ? edit : list}
    </IconContext.Provider>
  );
}

export default ListTodoItem;
