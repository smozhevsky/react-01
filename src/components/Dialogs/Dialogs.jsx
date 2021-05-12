import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d, index) => (
    <DialogItem name={d.name} id={d.id} key={index} />
  ));

  let messagesElements = props.state.messages.map((m, index) => {
    return <Message message={m.message} key={index} />;
  });

  let newMessage = React.createRef();
  let sendMessage = () => {
    let message = newMessage.current.value;
    alert(message);
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      <div>
        <textarea ref={newMessage}></textarea>
      </div>
      <div>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
