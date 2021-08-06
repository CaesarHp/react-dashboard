import { useState } from "react";
import { useDispatch } from "react-redux";

import classes from "./ListForm.module.scss";
import { dataActions } from "../store/data-slice";

const ListForm = function ({ btn }) {
  const dispatch = useDispatch();

  const [listInfo, setListInfo] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(dataActions.setTodoList(listInfo));

    setListInfo("");
  };

  const inputChangeHandler = (e) => {
    setListInfo(e.target.value);
  };

  return (
    <div className={classes["listform-container"]}>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          name="listInfo"
          placeholder="Enter a todo..."
          value={listInfo}
          onChange={inputChangeHandler}
          className={classes["listform-input"]}
        />
        <button className={classes["listform-btn"]}>{btn}</button>
      </form>
    </div>
  );
};

export default ListForm;
