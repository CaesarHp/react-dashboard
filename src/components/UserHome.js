import { useSelector } from "react-redux";

import classes from "./UserHome.module.scss";
import userIcon from "../local-img/user-icon.png";
import ApRadialChart from "../charts/ApRadialChart";

const UserHome = function () {
  const todoList = useSelector((state) => state.data.todoList);

  return (
    <div className={classes["user-container"]}>
      <div className={classes["user-basic-info"]}>
        <img src={userIcon} alt="icon" className={classes["user-icon"]} />
        <span className={classes["user-name"]}>Amanda Smith</span>
        <span className={classes["user-job"]}>Web Developer</span>
      </div>
      <div className={classes["user-body-info"]}>
        <div className={classes["user-body-info-individual"]}>
          <span className={classes["user-body-info-title"]}>Weight</span>
          <span className={classes["user-body-info-data"]}>55 kg</span>
        </div>
        <div className={classes["user-body-info-individual"]}>
          <span className={classes["user-body-info-title"]}>Height</span>
          <span className={classes["user-body-info-data"]}>165 cm</span>
        </div>
        <div className={classes["user-body-info-individual"]}>
          <span className={classes["user-body-info-title"]}>Age</span>
          <span className={classes["user-body-info-data"]}>25</span>
        </div>
      </div>
      <div className={classes["user-monthly-prograss"]}>
        <span className={classes["user-title"]}>Monthly Prograss</span>
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
