import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
 
  return (
    <Card className="expenses">
      {props.items.map((data, id) => {
        return <ExpenseItem info={data} key={id} />;
      })}
    </Card>
  );
}

export default Expenses;
