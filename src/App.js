import React, { useState } from "react";
import UserList from "./components/Users/UserList";


const USERS = [
  { id: "1", name: "Alex", age: 32 },
  { id: "2", name: "Beth", age: 27 },
];

function App() {
  const [users, setUsers] = useState(USERS);

  return (
    <div>
      <UserList users={users} />
    </div>
  );
}

export default App;
