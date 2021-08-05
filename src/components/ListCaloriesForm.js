import { useState } from "react";
import { useDispatch } from "react-redux";

import classes from "./ListCaloriesForm.module.scss";
import { dataActions } from "../store/data-slice";

const timeRange = {
  morning: "6:00-10:00",
  noon: "11:00-15:00",
  afternoon: "16:00-20:00",
  night: "21:00-0:00",
};

const ListCaloriesForm = function () {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    morningBurn: "",
    morningEarn: "",
    noonBurn: "",
    noonEarn: "",
    afternoonBurn: "",
    afternoonEarn: "",
    nightBurn: "",
    nightEarn: "",
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
    dispatch(dataActions.setCaloriesData(formData));
    clearInputHandler();
  };

  const clearInputHandler = () => {
    setFormData({
      morningBurn: "",
      morningEarn: "",
      noonBurn: "",
      noonEarn: "",
      afternoonBurn: "",
      afternoonEarn: "",
      nightBurn: "",
      nightEarn: "",
    });
  };

  return (
    <div className={classes["listform-container"]}>
      <span className={classes["listform-title"]}>Calories Statistics</span>

      <div onSubmit={submitHandler}>
        <div className={classes["listform-section"]}>
          <form className={classes["form-container"]}>
            <label
              className={classes["form-label"]}
            >{`${timeRange.morning} Burn`}</label>
            <input
              type="text"
              name="morningBurn"
              value={formData.morningBurn}
              onChange={inputChangeHandler}
              className={classes["form-input"]}
            />
          </form>
          <form className={classes["form-container"]}>
            <label
              className={classes["form-label"]}
            >{`${timeRange.morning} Earn`}</label>
            <input
              type="text"
              name="morningEarn"
              value={formData.morningEarn}
              onChange={inputChangeHandler}
              className={classes["form-input"]}
            />
          </form>
        </div>

        <div className={classes["listform-section"]}>
          <form className={classes["form-container"]}>
            <label
              className={classes["form-label"]}
            >{`${timeRange.noon} Burn`}</label>
            <input
              type="text"
              name="noonBurn"
              value={formData.noonBurn}
              onChange={inputChangeHandler}
              className={classes["form-input"]}
            />
          </form>
          <form className={classes["form-container"]}>
            <label
              className={classes["form-label"]}
            >{`${timeRange.noon} Earn`}</label>
            <input
              type="text"
              name="noonEarn"
              value={formData.noonEarn}
              onChange={inputChangeHandler}
              className={classes["form-input"]}
            />
          </form>
        </div>

        <div className={classes["listform-section"]}>
          <form className={classes["form-container"]}>
            <label
              className={classes["form-label"]}
            >{`${timeRange.afternoon} Burn`}</label>
            <input
              type="text"
              name="afternoonBurn"
              value={formData.afternoonBurn}
              onChange={inputChangeHandler}
              className={classes["form-input"]}
            />
          </form>
          <form className={classes["form-container"]}>
            <label
              className={classes["form-label"]}
            >{`${timeRange.afternoon} Earn`}</label>
            <input
              type="text"
              name="afternoonEarn"
              value={formData.afternoonEarn}
              onChange={inputChangeHandler}
              className={classes["form-input"]}
            />
          </form>
        </div>

        <div className={classes["listform-section"]}>
          <form className={classes["form-container"]}>
            <label
              className={classes["form-label"]}
            >{`${timeRange.night} Burn`}</label>
            <input
              type="text"
              name="nightBurn"
              value={formData.nightBurn}
              onChange={inputChangeHandler}
              className={classes["form-input"]}
            />
          </form>
          <form className={classes["form-container"]}>
            <label
              className={classes["form-label"]}
            >{`${timeRange.night} Earn`}</label>
            <input
              type="text"
              name="nightEarn"
              value={formData.nightEarn}
              onChange={inputChangeHandler}
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
          className={classes["form-btn-save"]}
          onClick={submitFormHandler}
        >
          Save Change
        </button>
      </div>
    </div>
  );
};

export default ListCaloriesForm;
