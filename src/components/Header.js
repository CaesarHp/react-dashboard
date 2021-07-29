import { IconContext } from "react-icons";
import { FaSearch, FaBell } from "react-icons/fa";

import classes from "./Header.module.scss";

const Header = function ({ title }) {
  const submitHandler = function (e) {
    e.preventDefault();
  };

  return (
    <IconContext.Provider value={{ className: classes["header-icon"] }}>
      <header className={classes["header-container"]}>
        <span className={classes["header-welcome"]}>{title}</span>
        <div className={classes["header-function"]}>
          <form className={classes["header-form"]} onSubmit={submitHandler}>
            <input type="text" className={classes["header-form-input"]} />
            <button className={classes["header-button-search"]}>
              <FaSearch />
            </button>
          </form>
          <button className={classes["header-button-notify"]}>
            <FaBell />
          </button>
        </div>
      </header>
    </IconContext.Provider>
  );
};

export default Header;
