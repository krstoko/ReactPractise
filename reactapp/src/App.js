import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpanse from './components/NewExpanse/NewExpanse';

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 8) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 8) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 8) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 8) },
  ];
  return (
    <div className="App">
      <NewExpanse />
     <Expenses items={expenses}/>
    </div>
  );
}

export default App;
