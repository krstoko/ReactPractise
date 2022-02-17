import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([
    {
      username: "Krsto",
      age: 23,
    },
  ]);
  return (
    <div className="App">
      <AddUser />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
