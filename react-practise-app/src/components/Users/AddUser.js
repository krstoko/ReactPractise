import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <Button type="submit" className="button">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
