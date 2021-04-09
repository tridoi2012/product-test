import React from "react";
import "./header.css";
import Horizontal from "./Horizontal";
import Navbar from "./Navbar";
const Header = (props) => {
  return (
    <header className="header">
      <div className="menu-top flex">
        <Horizontal></Horizontal>
        <Navbar></Navbar>
      </div>
    </header>
  );
};

export default Header;
