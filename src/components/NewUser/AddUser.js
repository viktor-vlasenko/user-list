import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const nameValidation = (name) => {
    if (name.trim().length === 0) {
      return false;
    } else {
      return true;
    }
  };

  const ageValidation = (age) => {
    if (age === "") return false;
    else if (age < 0) return false;
    else return true;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (nameValidation(userName) && ageValidation(userAge)) {
      const userData = {
        name: userName,
        age: userAge,
        id: Math.floor(Math.random() * 13 * 10000).toString(),
      };
      props.onAddUser(userData);
      setUserName("");
      setUserAge("");
    } else {
      let errorMessage = "Wrong Input";
      props.onInputError(errorMessage);
    }
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div>
          <div className={styles['form-control']}>
            <label>Name</label>
            <input
              type="text"
              value={userName}
              onChange={userNameChangeHandler}
            />
          </div>
          <div className={styles['form-control']}>
            <label>Age (Years)</label>
            <input
              type="number"
              value={userAge}
              onChange={userAgeChangeHandler}
            />
          </div>
          <div className={styles['form-control']}>
            <Button type={"submit"} text={'Add User'} />
          </div>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
