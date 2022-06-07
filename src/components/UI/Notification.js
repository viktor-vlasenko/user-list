import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import styles from "./Notification.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
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
        <Button text="OK" onClick={props.onClick} />
      </div>
    </Card>
  );
};

const Notification = (props) => {
  const removeNotification = () => {
    props.onOkClick();
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={removeNotification} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onClick={removeNotification}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Notification;
