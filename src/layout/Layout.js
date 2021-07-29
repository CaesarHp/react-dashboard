import React from "react";

import classes from "./Layout.module.scss";
import SideBar from "./SideBar";

const Layout = function (props) {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <SideBar />
        <main className={classes.main}>{props.children}</main>
      </div>
    </React.Fragment>
  );
};

export default Layout;
