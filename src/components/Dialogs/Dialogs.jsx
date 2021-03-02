import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = () => {
  let dialogs = [
    { id: 1, name: "Ilya" },
    { id: 2, name: "Margarita" },
    { id: 3, name: "Emily" },
  ];

  let messages = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Yo!" },
  ];

  let dialogsElements = dialogs.map((d, index) => (
    <DialogItem name={d.name} id={d.id} key={index}/>
  ));

  let messagesElements = messages.map((m, index) => {
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
