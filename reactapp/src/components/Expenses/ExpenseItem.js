import React, { useState } from "react"
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const [title,setTitle] = useState(props.info.title);

  const clickHandler = () =>{
    setTitle("Updated")
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.info.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.info.amount}</div>
      </div>
      <button onClick={clickHandler}>Click</button>
    </Card>
  );
}

export default ExpenseItem;