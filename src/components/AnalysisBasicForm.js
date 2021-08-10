import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./AnalysisBasicForm.module.scss";
import { dataActions } from "../store/data-slice";

const AnalysisBasicForm = () => {
  const dispatch = useDispatch();

  const previousData = useSelector((state) => state.data.basicData);

  const [formData, setFormData] = useState({
    sleepGoal: "",
    sleepToday: "",
    stepsGoal: "",
    stepsToday: "",
    heartRate: "",
  });

  const [required, setRequired] = useState(false);

  const inputChangeHandler = (e) => {
    const { name } = e.target;
    const value = e.target.value.replace(/\D/g, "");
    setFormData((state) => ({ ...state, [name]: +value }));

    setRequired(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (Object.values(formData).includes("")) {
      setRequired(true);
      return;
    } else {
      dispatch(dataActions.setUserInfo(formData));
      clearInputHandler();
    }
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
            <input
              type="text"
              value={formData.sleepGoal}
              name="sleepGoal"
              placeholder={previousData.sleepGoal}
              onChange={inputChangeHandler}
              className={classes["form-input"]}
            />
          </form>
          <form className={classes["form-container"]}>
            <label className={classes["form-label"]}>
              Sleep hours today (hr):
            </label>
            <input
              type="text"
              value={formData.sleepToday}
              name="sleepToday"
              placeholder={previousData.sleepToday}
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
              placeholder={previousData.stepsGoal}
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
              placeholder={previousData.stepsToday}
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
              placeholder={previousData.heartRate}
              className={classes["form-input"]}
            />
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
};

export default AnalysisBasicForm;
