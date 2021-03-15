import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d, index) => (
    <DialogItem name={d.name} id={d.id} key={index} />
  ));

  let messagesElements = props.messages.map((m, index) => {
    return <Message message={m.message} key={index} />;
  });

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
