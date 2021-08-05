import { useState } from "react";
import { useDispatch } from "react-redux";

import classes from "./ListBasicForm.module.scss";
import { dataActions } from "../store/data-slice";

const ListBasicFormTest = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    sleepGoal: "",
    sleepToday: "",
    stepsGoal: "",
    stepsToday: "",
    heartRate: "",
  });

  const inputChangeHandler = (e) => {
    const { name } = e.target;
    const value = e.target.value.replace(/\D/g, "");
    setFormData((state) => ({ ...state, [name]: +value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    submitFormHandler();
  };

  const submitFormHandler = () => {
    dispatch(dataActions.setBasicData(formData));
    clearInputHandler();
  };

  const clearInputHandler = () => {
    setFormData({
      sleepGoal: "",
      sleepToday: "",
      stepsGoal: "",
      stepsToday: "",
      heartRate: "",
    });
  };

  return (
    <div className={classes["listform-container"]}>
      <span className={classes["listform-title"]}>Basic Statistics</span>
      <div onSubmit={submitHandler}>
        <div className={classes["listform-section"]}>
          <form className={classes["form-container"]}>
            <label className={classes["form-label"]}>
              Sleep hours goal (hr):
            </label>
            <select
              onChange={inputChangeHandler}
              name="sleepGoal"
              className={classes["form-select"]}
            >
              <option value="7">7</option>
              <option value="7.5">7.5</option>
              <option value="8">8</option>
              <option value="8.5">8.5</option>
            </select>
          </form>
          <form className={classes["form-container"]}>
            <label className={classes["form-label"]}>
              Sleep hours today (hr):
            </label>
            <input
              type="text"
              value={formData.sleepToday}
              name="sleepToday"
              onChange={inputChangeHandler}
              className={classes["form-input"]}
            />
          </form>
        </div>

        <div className={classes["listform-section"]}>
          <form className={classes["form-container"]}>
            <label className={classes["form-label"]}>Steps goal:</label>
            <input
              type="text"
              value={formData.stepsGoal}
              onChange={inputChangeHandler}
              name="stepsGoal"
              className={classes["form-input"]}
            />
          </form>
          <form className={classes["form-container"]}>
            <label className={classes["form-label"]}>Steps today:</label>
            <input
              type="text"
              value={formData.stepsToday}
              onChange={inputChangeHandler}
              name="stepsToday"
              className={classes["form-input"]}
            />
          </form>
        </div>

        <div className={classes["listform-section"]}>
          <div className={classes["form-container"]}>
            <span className={classes["form-label"]}>
              Hear rate range (Bpm):
            </span>
            <span className={classes["form-heartrate"]}>60Bpm - 100Bpm</span>
          </div>

          <form className={classes["form-container"]}>
            <label className={classes["form-label"]}>Hear rate (Bpm):</label>
            <input
              type="text"
              value={formData.heartRate}
              onChange={inputChangeHandler}
              name="heartRate"
              className={classes["form-input"]}
            />
          </form>
        </div>
      </div>

      <div className={classes["form-btn-container"]}>
        <button
          className={classes["form-btn-clear"]}
          onClick={clearInputHandler}
        >
          Clear Input
        </button>
        <button
          type="submit"
          className={classes["form-btn-save"]}
          onClick={submitFormHandler}
        >
          Save Change
        </button>
      </div>
    </div>
  );
};

export default ListBasicFormTest;
