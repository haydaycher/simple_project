import css from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import React, { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const createUserHandler = (event) => {
    const inputUserName = nameInputRef.current.value;
    const inputUserAge = ageInputRef.current.value;

    event.preventDefault();

    //валідація
    if (inputUserName.trim().length === 0 || inputUserAge.trim().length === 0) {
      setError({
        title: "An error occurred!",
        message: "Please enter a valid name and age (non-empty values).",
      });

      return;
    }
    if (+inputUserAge < 1) {
      setError({
        title: "An error occurred!",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onCreateUser(inputUserName, inputUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onCloseModal={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={css.input}>
        <form onSubmit={createUserHandler}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
