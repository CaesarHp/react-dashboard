import React from "react";
import { useSelector } from "react-redux";

import classes from "./AccountInfo.module.scss";
import male from "../local-img/user-male.png";
import female from "../local-img/user-female.png";

function AccountInfo() {
  const accountInfo = useSelector((state) => state.data.userInfo);

  return (
    <div className={classes["account-container"]}>
      <img
        src={accountInfo.icon === "female" ? female : male}
        alt="icon"
        className={classes["account-icon"]}
      />
      <div className={classes["account-info-container"]}>
        <span className={classes["account-name"]}>{accountInfo.name}</span>
        <span className={classes["account-job"]}>{accountInfo.job}</span>

        <div className={classes["account-body-info"]}>
          <div className={classes["account-body-info-individual"]}>
            <span className={classes["account-body-info-title"]}>
              Weight (kg)
            </span>
            <span className={classes["account-body-info-data"]}>
              {accountInfo.weight}
            </span>
          </div>
          <div className={classes["account-body-info-individual"]}>
            <span className={classes["account-body-info-title"]}>
              Height (cm)
            </span>
            <span className={classes["account-body-info-data"]}>
              {accountInfo.height}
            </span>
          </div>
          <div className={classes["account-body-info-individual"]}>
            <span className={classes["account-body-info-title"]}>Age</span>
            <span className={classes["account-body-info-data"]}>
              {accountInfo.age}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;
