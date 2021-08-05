import React from "react";

import classes from "./List.module.scss";
import Header from "../components/Header";
import ListForms from "../components/ListForms";

const List = function () {
  return (
    <React.Fragment>
      <div className={classes["list-container"]}>
        <Header title={"List"} />
        <ListForms />
      </div>
    </React.Fragment>
  );
};

export default List;
