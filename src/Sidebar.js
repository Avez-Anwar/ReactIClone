import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import RateReviewIcon from "@material-ui/icons/RateReview";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar className="sidebar__avatar" />

        <div className="sidebar__input">
          <SearchRoundedIcon />
          <input type="text" placeholder="search" />
        </div>
        <IconButton variant="outlined">
          <RateReviewIcon />
        </IconButton>
      </div>
      <div>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
