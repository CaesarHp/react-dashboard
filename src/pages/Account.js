import classes from "./Account.module.scss";
import Header from "../components/Header";

const Account = function () {
  return (
    <div className={classes["account-container"]}>
      <Header title="Account" />
    </div>
  );
};

export default Account;
