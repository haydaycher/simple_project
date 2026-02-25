import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import "./App.css";
import { useState } from "react";

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
    <div>
      <AddUser onCreateUser={createUserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
