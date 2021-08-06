import React from "react";
import { NavLink, Link } from "react-router-dom";

import classes from "./SideBar.module.scss";
import logo from "../local-img/logo.png";
import promot from "../local-img/promot.png";
import { IconContext } from "react-icons";
import { FaHome, FaChartPie, FaCalendarAlt, FaUser } from "react-icons/fa";

const SideBar = function () {
  return (
    <React.Fragment>
      <IconContext.Provider value={{ className: classes["sidebar-icon"] }}>
        <div className={classes["sidebar-container"]}>
          <div>
            <Link to="/home" className={classes["sidebar-logo-link"]}>
              <div className={classes["sidebar-logo-container"]}>
                <img
                  src={logo}
                  alt="logo"
                  className={classes["sidebar-logo-img"]}
                />
                <span className={classes["sidebar-logo-type"]}>Tech-Fit</span>
              </div>
            </Link>

            <ul className={classes["sidebar-list"]}>
              <li>
                <NavLink
                  to="/home"
                  className={classes["sidebar-list-link"]}
                  activeClassName={classes["sidebar-list-link-active"]}
                >
                  <FaHome className={classes["sidebar-icon-active"]} />
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/analysis"
                  className={classes["sidebar-list-link"]}
                  activeClassName={classes["sidebar-list-link-active"]}
                >
                  <FaChartPie className={classes["sidebar-icon-active"]} />
                  <span>Analysis</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/list"
                  className={classes["sidebar-list-link"]}
                  activeClassName={classes["sidebar-list-link-active"]}
                >
                  <FaCalendarAlt className={classes["sidebar-icon-active"]} />
                  <span>List</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/account"
                  className={classes["sidebar-list-link"]}
                  activeClassName={classes["sidebar-list-link-active"]}
                >
                  <FaUser className={classes["sidebar-icon-active"]} />
                  <span>Account</span>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className={classes["sidebar-promot-container"]}>
            <img
              src={promot}
              alt="img"
              className={classes["sidebar-promot-img"]}
            />
            <button className={classes["sidebar-promot-btn"]}>
              Upgrade to Pro
            </button>
          </div>
        </div>
      </IconContext.Provider>
    </React.Fragment>
  );
};

export default SideBar;
