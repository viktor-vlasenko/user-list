import React from "react";
import User from "./User";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card>
      {props.users.map((item) => (
        <User key={item.id} user={item} />
      ))}
    </Card>
  );
};

export default UserList;
