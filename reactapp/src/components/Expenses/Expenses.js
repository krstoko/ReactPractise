import React,{ useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === filteredYear)

  let expensesContent = <p>No expenses fount!</p>

  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((data, id) => {
      return <ExpenseItem info={data} key={id} />;
  })}

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
