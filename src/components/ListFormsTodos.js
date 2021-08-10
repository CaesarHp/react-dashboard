import React from "react";

import classes from "./ListFormsTodos.module.scss";
import ListForm from "./ListForm";
import ListTodo from "./ListTodo";

function ListFormsTodos() {
  return (
    <div className={classes["container"]}>
      <span className={classes["title"]}>Todo List</span>
      <ListForm btn={"Add List"} />
      <ListTodo />
    </div>
  );
}

export default ListFormsTodos;
