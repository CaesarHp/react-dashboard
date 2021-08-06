import React from "react";

import classes from "./List.module.scss";
import Header from "../components/Header";
import ListFormsTodos from "../components/ListFormsTodos";

const List = function () {
  return (
    <React.Fragment>
      <div className={classes["list-container"]}>
        <Header title={"List"} />
        <ListFormsTodos />
      </div>
    </React.Fragment>
  );
};

export default List;
