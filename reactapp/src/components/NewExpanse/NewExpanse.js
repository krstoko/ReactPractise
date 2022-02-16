import React from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpanse = (props) => {
    const onSubmitData = (savedData) =>{
        props.addExpenseHandler(savedData)
    }
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitData={onSubmitData}/>
    </div>
  );
};

export default NewExpanse;
