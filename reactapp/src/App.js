import './App.css';
import ExpenseItem from './components/ExpenseItem';
function App() {
  const expenses = [
    {title: "Car Insurance", amount: 294.67, date: new Date(2021,2,8)},
    {title: "Car Insurance", amount: 294.67, date: new Date(2021,2,8)},
    {title: "Car Insurance", amount: 294.67, date: new Date(2021,2,8)},
    {title: "Car Insurance", amount: 294.67, date: new Date(2021,2,8)}
  ]
  return (
    <div className="App">
      {expenses.map((data,id) =>{
        return <ExpenseItem info={data} key={id}/>
      })}
    </div>
  );
}

export default App;
