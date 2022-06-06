import React, { useState } from "react";
import UserList from "./components/Users/UserList";
import AddUser from "./components/NewUser/AddUser";
import Notification from "./components/UI/Notification";

const USERS = [
  { id: "1", name: "Alex", age: 32 },
  { id: "2", name: "Beth", age: 27 },
];

function App() {
  const [users, setUsers] = useState(USERS);
  const [errorOccured, setErrorOccured] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const addUserHandler = (userData) => {
    setUsers((prevUsers) => {
      return [userData, ...prevUsers];
    });
  };

  const wrongInputHandler = (msg) => {
    setErrorOccured(true);
    setErrorMessage(msg);
  };

  const removeNotificationHandler = () => {
    setErrorMessage('');
    setErrorOccured(false);
  }

  return (
    <div>
      {errorOccured && <Notification message={errorMessage} onOkClick={removeNotificationHandler} />}
      <AddUser onAddUser={addUserHandler} onInputError={wrongInputHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
