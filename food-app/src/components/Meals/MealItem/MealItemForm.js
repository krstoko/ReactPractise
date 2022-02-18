import React from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <Input />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
