import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpanse = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSubmitData = (savedData) => {
    props.addExpenseHandler(savedData);
    setIsEditing(false)
  };

  const startEdititng = () => {
    setIsEditing(true);
  };

  const stopEditing = () =>{
      setIsEditing(false)
  }
  return (
    <div className="new-expense">
      {isEditing === false ? (
        <button onClick={startEdititng}>Add new expense</button>
      ) : (
        <ExpenseForm onSubmitData={onSubmitData} onCancel={stopEditing}/>
      )}
    </div>
  );
};

export default NewExpanse;
