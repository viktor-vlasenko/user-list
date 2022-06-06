import React from "react";
import Card from "../UI/Card";
import styles from "./User.module.css";

const User = (props) => {
  return (
    <Card className={styles.user}>
      {props.user.name} ({props.user.age} years old)
    </Card>
  );
};

export default User;
