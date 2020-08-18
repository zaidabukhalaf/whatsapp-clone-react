import React from "react";
import { Avatar } from "@material-ui/core";

const SidebarChat = ({ addNewChat }) => {
  const createChat = () => {
    const chatName = prompt("Please Enter Chat Name"); // store val in a var

    if (chatName) {
      // store the data base
    }
  };

  return !addNewChat ? (
    <div className="sidebarchat">
      <Avatar />
      <div className="sidebarchat__info">
        <h2>Room name</h2>
        <p>last message ...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarchat">
      <h2>Add New Chat</h2>
    </div>
  );
};

export default SidebarChat;
