import React from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./Notification.module.css";

const Notification = (props) => {
  const removeNotification = () => {
    props.onOkClick();
  };
  return (
    <div>
      <div className={styles.backdrop} onClick={removeNotification}></div>
      <Card className={`${styles.modal}`}>
        <header className={styles.header}>
          <h2 className={styles["error-title"]}>
            {props.title ? props.title : "Error"}
          </h2>
        </header>
        <div className={styles.content}>
          <p className={styles["error-message"]}>{props.message}</p>
        </div>
        <div className={styles.actions}>
          <Button text="OK" onClick={removeNotification} />
        </div>
      </Card>
    </div>
  );
};

export default Notification;
