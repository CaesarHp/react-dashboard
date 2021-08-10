import React from "react";

import classes from "./List.module.scss";
import Header from "../components/Header";
import ListFormsTodos from "../components/ListFormsTodos";
import ListMonthly from "../components/ListMonthly";

const List = function () {
  return (
    <React.Fragment>
      <div className={classes["list-container"]}>
        <Header title={"List"} />
        <ListFormsTodos />
        <ListMonthly />
      </div>
    </React.Fragment>
  );
};

export default List;
