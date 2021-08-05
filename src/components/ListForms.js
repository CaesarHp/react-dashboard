import classes from "./ListForms.module.scss";
import ListBasicForm from "./ListBasicForm";
import ListCaloriesForm from "./ListCaloriesForm";

const ListForms = function () {
  return (
    <div className={classes["form-container"]}>
      <ListBasicForm />
      <ListCaloriesForm />
    </div>
  );
};

export default ListForms;
