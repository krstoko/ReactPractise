import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  //   const [values, setValues] = useState({ username: "", age: "" });
  const nameRefInput = useRef();
  const ageRefInput = useRef();
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRefInput.current.value;
    const enteredAge = ageRefInput.current.value;
    console.log(enteredAge)
    if (enteredName.length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age",
      });
      return;
    }
    props.addNewUser({ username: enteredName, age: enteredAge });
    // setValues({ username: "", age: "" });
    nameRefInput.current.value = "";
    ageRefInput.current.value = "";
  };
  //   const changeHandler = (name) => (event) => {
  //     setValues((prevValues) => {
  //       return { ...prevValues, [name]: event.target.value };
  //     });
  //   };

  const resetError = () => {
    setError(null);
  };
  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          massage={error.message}
          removeModal={resetError}
        />
      )}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            ref={nameRefInput}
            // value={values.username}
            // onChange={changeHandler("username")}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageRefInput}
            // value={values.age}
            // onChange={changeHandler("age")}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
