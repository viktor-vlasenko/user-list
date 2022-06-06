import React from "react";
import User from "./User";
import Card from "../UI/Card";
import styles from './UserList.module.css'

const UserList = (props) => {
  return (
    <Card className={styles['user-list']}>
      
      {props.users.map((item) => (
        <User key={item.id} user={item} />
      ))}
    </Card>
  );
};

export default UserList;
