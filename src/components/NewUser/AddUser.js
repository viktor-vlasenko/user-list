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
    let errorMessage;
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      errorMessage = "Name and age can't be empty";
      props.onInputError(errorMessage);
    } else if (+userAge < 1) {
      errorMessage = "Age can't be less than 1";
      props.onInputError(errorMessage);
    } else {
      const userData = {
        name: userName,
        age: userAge,
        id: Math.floor(Math.random() * 13 * 10000).toString(),
      };
      props.onAddUser(userData);
      setUserName("");
      setUserAge("");
    }
  };

  return (
    <Card className={styles["add-user"]}>
      <form onSubmit={submitHandler}>
        <div className={styles["form-controls"]}>
          <div className={styles["form-control"]}>
            <label htmlFor="username">Name</label>
            <input
              id="username"
              type="text"
              value={userName}
              onChange={userNameChangeHandler}
            />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              value={userAge}
              onChange={userAgeChangeHandler}
            />
          </div>
          <div className={styles["form-control"]}>
            <Button type={"submit"} text={"Add User"} />
          </div>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
