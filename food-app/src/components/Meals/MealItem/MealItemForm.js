import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmiuntNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === "" ||
      enteredAmiuntNumber < 1 ||
      enteredAmiuntNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.addToCartHandler(enteredAmiuntNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: `id ${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please add valid amount</p>}
    </form>
  );
};

export default MealItemForm;
