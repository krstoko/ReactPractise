import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

function Expenses() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 8) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 8) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 8) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 8) },
  ];
  return (
    <Card className="expenses">
      {expenses.map((data, id) => {
        return <ExpenseItem info={data} key={id} />;
      })}
    </Card>
  );
}

export default Expenses;
