import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addNewUser = (values) => {
    setUsersList((prevState) => {
      return [values, ...prevState];
    });
  };
  return (
    <div className="App">
      <AddUser addNewUser={addNewUser} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
