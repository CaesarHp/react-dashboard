import { useSelector } from "react-redux";

import classes from "./UserHome.module.scss";
import female from "../local-img/user-female.png";
import male from "../local-img/user-male.png";
import ApRadialChart from "../charts/ApRadialChart";

const UserHome = function () {
  const todoList = useSelector((state) => state.data.todoList);

  const accountInfo = useSelector((state) => state.data.userInfo);

  return (
    <div className={classes["user-container"]}>
      <div className={classes["user-basic-info"]}>
        <img
          src={accountInfo.icon === "female" ? female : male}
          alt="icon"
          className={classes["user-icon"]}
        />
        <span className={classes["user-name"]}>{accountInfo.name}</span>
        <span className={classes["user-job"]}>{accountInfo.job}</span>
      </div>
      <div className={classes["user-body-info"]}>
        <div className={classes["user-body-info-individual"]}>
          <span className={classes["user-body-info-title"]}>Weight</span>
          <span className={classes["user-body-info-data"]}>
            {accountInfo.weight} kg
          </span>
        </div>
        <div className={classes["user-body-info-individual"]}>
          <span className={classes["user-body-info-title"]}>Height</span>
          <span className={classes["user-body-info-data"]}>
            {accountInfo.height} cm
          </span>
        </div>
        <div className={classes["user-body-info-individual"]}>
          <span className={classes["user-body-info-title"]}>Age</span>
          <span className={classes["user-body-info-data"]}>
            {accountInfo.age}
          </span>
        </div>
      </div>
      <div className={classes["user-monthly-prograss"]}>
        <span className={classes["user-title"]}>Monthly Progress</span>
        <ApRadialChart />
      </div>
      <div className={classes["user-todo-list"]}>
        <span className={classes["user-title"]}>Todo List</span>
        <ul className={classes["user-todo-list-list"]}>
          {todoList.map((item) => (
            <li
              key={item.id}
              id={item.id}
              className={classes["user-todo-list-item"]}
            >
              {item.info}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserHome;
