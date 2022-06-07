import React, { useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    let errorMessage, title;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      title = "Invalid input";
      errorMessage = "Name and age can't be empty";
      props.onInputError(title, errorMessage);
    } else if (+enteredAge < 1) {
      title = "Invalid age";
      errorMessage = "Age can't be less than 1";
      props.onInputError(title, errorMessage);
    } else {
      const userData = {
        name: enteredName,
        age: enteredAge,
        id: Math.floor(Math.random() * 13 * 10000).toString(),
      };
      props.onAddUser(userData);
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }
  };

  return (
    <Card className={styles["add-user"]}>
      <form onSubmit={submitHandler}>
        <div className={styles["form-controls"]}>
          <div className={styles["form-control"]}>
            <label htmlFor="username">Name</label>
            <input id="username" type="text" ref={nameInputRef} />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" ref={ageInputRef} />
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
