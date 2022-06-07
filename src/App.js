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
  const [error, setError] = useState();

  const addUserHandler = (userData) => {
    setUsers((prevUsers) => {
      return [userData, ...prevUsers];
    });
  };

  const wrongInputHandler = (title, msg) => {
    setError({ title: title, message: msg });
  };

  const removeNotificationHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Notification
          title={error.title}
          message={error.message}
          onOkClick={removeNotificationHandler}
        />
      )}
      <AddUser onAddUser={addUserHandler} onInputError={wrongInputHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
