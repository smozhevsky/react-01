import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Ilya" id="1" />
        <DialogItem name="Margarita" id="2" />
        <DialogItem name="Emily" id="3" />
      </div>
      <div className={classes.messages}>
        <Message message="Hi!" />
        <Message message="How are you?" />
        <Message message="Yo!" />
      </div>
    </div>
  );
};

export default Dialogs;
