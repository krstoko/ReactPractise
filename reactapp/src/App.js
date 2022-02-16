import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpanse from './components/NewExpanse/NewExpanse';

function App() {
  const [expenses,setExpenses] = useState([
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 8) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 8) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 8) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 8) },
  ]);

  const addExpenseHandler = (newExpense) =>{
    setExpenses((prevState) => [newExpense,...prevState])
  }
  return (
    <div className="App">
      <NewExpanse addExpenseHandler={addExpenseHandler}/>
     <Expenses items={expenses}/>
    </div>
  );
}

export default App;
