import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [values, setValues] = useState({ title: "", amount: "", date: "" });
  const onChangeHandler = (name) => (event) => {
    setValues((prevState) => {
      return { ...prevState, [name]: event.target.value };
    });
  };

  const submitHandler = (event) =>{
      event.preventDefault();
      let expense = {
          title: values.title,
          amount: values.amount,
          date: new Date(values.date)
      }
      props.onSubmitData(expense)
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={onChangeHandler("title")}
            value={values.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={onChangeHandler("amount")}
            value={values.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={onChangeHandler("date")}
            value={values.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
