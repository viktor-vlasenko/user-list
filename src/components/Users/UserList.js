import React from "react";
import User from "./User";

const UserList = (props) => {
  return (
    <div>
      {props.users.map((item) => (
        <User key={item.id} user={item} />
      ))}
    </div>
  );
};

export default UserList;
