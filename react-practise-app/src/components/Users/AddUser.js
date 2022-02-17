import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [values, setValues] = useState({ username: "", age: "" });
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (values.username.trim().length === 0 || values.age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (values.age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age",
      });
      return;
    }
    props.addNewUser(values);
    setValues({ username: "", age: "" });
  };
  const changeHandler = (name) => (event) => {
    setValues((prevValues) => {
      return { ...prevValues, [name]: event.target.value };
    });
  };

  const resetError = () =>{
      setError(null)
  }
  return (
    <div>
      {error && <ErrorModal title={error.title} massage={error.message} removeModal={resetError}/>}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={values.username}
            onChange={changeHandler("username")}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={values.age}
            onChange={changeHandler("age")}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
