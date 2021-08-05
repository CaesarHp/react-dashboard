import { useSelector } from "react-redux";

import classes from "./CardHome.module.scss";
import Card from "../cards/Card";

const CardHome = function () {
  const cardData = useSelector((state) => state.data.basicData);

  const sleepData = cardData.sleepToday;
  const stepData = cardData.stepsToday;
  const heartData = cardData.heartRate;

  return (
    <div className={classes["card-component-container"]}>
      <Card value={"sleep"} data={sleepData} />
      <Card value={"step"} data={stepData} />
      <Card value={"heart"} data={heartData} />
    </div>
  );
};

export default CardHome;
