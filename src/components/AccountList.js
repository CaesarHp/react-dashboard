import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./AccountList.module.scss";
import { dataActions } from "../store/data-slice";

function AccountList() {
  const dispatch = useDispatch();

  const previousData = useSelector((state) => state.data.userInfo);

  const [listData, setListData] = useState({
    name: "",
    job: "",
    weight: "",
    height: "",
    age: "",
    icon: "female",
  });

  const [required, setRequired] = useState(false);

  const numberInputChangeHandler = (e) => {
    const { name } = e.target;
    const value = e.target.value.replace(/\D/g, "");
    setListData((state) => ({ ...state, [name]: +value }));

    setRequired(false);
  };

  const stringInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setListData((state) => ({ ...state, [name]: value }));

    setRequired(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (Object.values(listData).includes("")) {
      setRequired(true);
      return;
    } else {
      dispatch(dataActions.setUserInfo(listData));
      clearInputHandler();
    }
  };

  const clearInputHandler = () => {
    setListData({
      name: "",
      job: "",
      weight: "",
      height: "",
      age: "",
    });
  };

  return (
    <div className={classes["accountlist-container"]}>
      <span className={classes["accountlist-title"]}>Edit Info</span>
      <div onSubmit={submitHandler}>
        <div className={classes["accountlist-section"]}>
          <form className={classes["form-container"]}>
            <label className={classes["form-label"]}>Your full name:</label>
            <input
              type="text"
              value={listData.name}
              name="name"
              required
              placeholder={previousData.name}
              onChange={stringInputChangeHandler}
              className={classes["form-input"]}
            />
          </form>
          <form className={classes["form-container"]}>
            <label className={classes["form-label"]}>Your job title:</label>
            <input
              type="text"
              value={listData.job}
              name="job"
              required
              placeholder={previousData.job}
              onChange={stringInputChangeHandler}
              className={classes["form-input"]}
            />
          </form>
        </div>

        <div className={classes["accountlist-section"]}>
          <form className={classes["form-container"]}>
            <label className={classes["form-label"]}>Your height:</label>
            <input
              type="text"
              value={listData.height}
              onChange={numberInputChangeHandler}
              name="height"
              required
              placeholder={previousData.height}
              className={classes["form-input"]}
            />
          </form>
          <form className={classes["form-container"]}>
            <label className={classes["form-label"]}>Your weight:</label>
            <input
              type="text"
              value={listData.weight}
              onChange={numberInputChangeHandler}
              name="weight"
              required
              placeholder={previousData.weight}
              className={classes["form-input"]}
            />
          </form>
        </div>

        <div className={classes["accountlist-section"]}>
          <form className={classes["form-container"]}>
            <label className={classes["form-label"]}>Your age:</label>
            <input
              type="text"
              value={listData.age}
              onChange={numberInputChangeHandler}
              name="age"
              required
              placeholder={previousData.age}
              className={classes["form-input"]}
            />
          </form>
          <form className={classes["form-container"]}>
            <label className={classes["form-label"]}>
              Select your figure icon:
            </label>
            <select
              type="text"
              name="icon"
              value={listData.icon}
              required
              onChange={stringInputChangeHandler}
              className={classes["form-select"]}
            >
              <option value="female">female</option>
              <option value="male">male</option>
            </select>
          </form>
        </div>

        <div className={classes["form-btn-container"]}>
          {required ? (
            <span className={classes["form-required"]}>
              Please fill out all forms
            </span>
          ) : (
            <span></span>
          )}
          <div>
            <button
              className={classes["form-btn-clear"]}
              onClick={clearInputHandler}
            >
              Clear Input
            </button>
            <button
              type="submit"
              className={classes["form-btn-save"]}
              onClick={submitHandler}
            >
              Save Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountList;
