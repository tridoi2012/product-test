import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FullscreenIcon from "@material-ui/icons/Fullscreen";

const Navbar = (props) => {
  return (
    <div className="nav-bar">
      <ul className="nav-menus flex">
        <li className="nav-menus-items">
          <a href="./">
            <SearchIcon></SearchIcon>
          </a>
        </li>
        <li className="nav-menus-items">
          <a href="./">
            <NotificationsNoneIcon></NotificationsNoneIcon>
          </a>
        </li>
        <li className="nav-menus-items">
          <a href="./">
            <StarOutlineIcon></StarOutlineIcon>
          </a>
        </li>
        <li className="nav-menus-items">
          <a href="./">
            <Brightness2Icon></Brightness2Icon>
          </a>
        </li>
        <li className="nav-menus-items">
          <a href="./">
            <ShoppingCartIcon></ShoppingCartIcon>
          </a>
        </li>
        <li className="nav-menus-items">
          <a href="./">
            <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>
          </a>
        </li>
        <li className="nav-menus-items">
          <a href="./">
            <FullscreenIcon></FullscreenIcon>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
