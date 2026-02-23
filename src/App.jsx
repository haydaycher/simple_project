import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [userList, setUserList] = useState([]);

  const createUserHandler = (name, age) => {
    const userData = {
      name: enteredName,
      age: enteredAge,
    };
    // props.onSaveUserData(userData);
    // setEnteredName("");
    // setEnteredAge("");
  };

  return (
    <div>
      <AddUser onCreateUser={setUserList} />
      <UserList users={[userList]} />
    </div>
  );
};

export default App;
