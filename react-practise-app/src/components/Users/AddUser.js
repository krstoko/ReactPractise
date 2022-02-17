import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddUser = (props) => {
  const [values, setValues] = useState({ username: "", age: "" });
  const addUserHandler = (event) => {
    event.preventDefault();
    if (values.username.trim().length === 0 || values.age.trim().length === 0) {
      return;
    }
    if (values.age < 1) {
      return;
    }
    setValues({ username: "", age: "" });
  };
  const changeHandler = (name) => (event) => {
    setValues((prevValues) => {
      return { ...prevValues, [name]: event.target.value };
    });
  };
  return (
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
        <Button type="submit" className="button">
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
