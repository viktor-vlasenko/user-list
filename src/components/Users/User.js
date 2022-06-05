import React from "react";

const User = (props) => {
  return (
    <div>
      {props.user.name} ({props.user.age} years old)
    </div>
  );
};

export default User;
