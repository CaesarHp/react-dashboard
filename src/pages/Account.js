import classes from "./Account.module.scss";
import Header from "../components/Header";
import AccountInfo from "../components/AccountInfo";
import AccountList from "../components/AccountList";

const Account = function () {
  return (
    <div className={classes["account-container"]}>
      <Header title="Account" />
      <AccountInfo />
      <AccountList />
    </div>
  );
};

export default Account;
