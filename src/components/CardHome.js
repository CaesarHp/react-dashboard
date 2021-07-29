import classes from "./CardHome.module.scss";
import Card from "../cards/Card";

const CardHome = function () {
  return (
    <div className={classes["card-component-container"]}>
      <Card value={"sleep"} />
      <Card value={"step"} />
      <Card value={"heart"} />
    </div>
  );
};

export default CardHome;
