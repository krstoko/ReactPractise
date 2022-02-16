import React from "react"
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.info.date} />
      <div className="expense-item__description">
        <h2>{props.info.title}</h2>
        <div className="expense-item__price">${props.info.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;