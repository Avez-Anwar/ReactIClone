import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebar__chat">
      <Avatar />
      <div className="sidebar__info">
        <h3>This is a message</h3>
        <p>Last message...</p>
        <small>timestamp</small>
      </div>
    </div>
  );
}

export default SidebarChat;
