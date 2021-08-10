import React from "react";

import classes from "./ListMonthly.module.scss";
import ProgressBar from "../charts/ProgressBar";

function ListMonthly() {
  return (
    <div className={classes["monthly-container"]}>
      <span className={classes["monthly-title"]}>Monthly Progress</span>
      <ProgressBar />
    </div>
  );
}

export default ListMonthly;
