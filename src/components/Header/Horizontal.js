import React from "react";
import "./header.css";

const Horizontal = (props) => {
  return (
    <div className="menu-button flex">
      <div className="bonus-ui">
        <a className="bonus-ui-link" href="./">
          Bonus UI
        </a>
      </div>
      <div className="level-menu">
        <a href="./" className="level-menu-link">
          Level Menu
        </a>
      </div>
    </div>
  );
};

export default Horizontal;
