import css from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import React, { useState } from "react";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const createUserHandler = (event) => {
    event.preventDefault();

    //валідація
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={css.input}>
      <form onSubmit={createUserHandler}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={enteredName}
          type="text"
          onChange={nameChangeHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          value={enteredAge}
          type="number"
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
