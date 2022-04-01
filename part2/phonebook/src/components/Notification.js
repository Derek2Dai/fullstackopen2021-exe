import React from "react";

const Notification = ({ message }) => {
  if (message.txt === "") {
    return null;
  }

  return <div className={message.msgtyp}>{message.msgtxt}</div>;
};

export default Notification;
