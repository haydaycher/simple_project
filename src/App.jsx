import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import "./App.css";
import react, { useState, Fragment } from "react";

const App = () => {
  const [userList, setUserList] = useState([]);

  const createUserHandler = (name, age) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: name, age: age, id: Math.random.toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onCreateUser={createUserHandler} />
      <UserList users={userList} />
    </Fragment>
  );
};

export default App;
