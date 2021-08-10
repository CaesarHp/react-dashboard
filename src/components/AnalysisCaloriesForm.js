import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./AnalysisCaloriesForm.module.scss";
import { dataActions } from "../store/data-slice";

const timeRange = {
  morning: "6:00-10:00",
  noon: "11:00-15:00",
  afternoon: "16:00-20:00",
  night: "21:00-0:00",
};

const AnalysisCaloriesForm = function () {
  const dispatch = useDispatch();

  const previousData = useSelector((state) => state.data.caloriesData);

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
              placeholder={previousData.morningBurn}
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
              placeholder={previousData.morningEarn}
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
              placeholder={previousData.noonBurn}
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
              placeholder={previousData.noonEarn}
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
              placeholder={previousData.afternoonBurn}
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
              placeholder={previousData.afternoonEarn}
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
              placeholder={previousData.nightBurn}
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
              placeholder={previousData.nightEarn}
              value={formData.nightEarn}
              onChange={inputChangeHandler}
              className={classes["form-input"]}
            />
          </form>
        </div>
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
          <button className={classes["form-btn-save"]} onClick={submitHandler}>
            Save Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisCaloriesForm;
