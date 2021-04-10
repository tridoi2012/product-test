import React from "react";
import "./main.css";
import HomeIcon from "@material-ui/icons/Home";

const PageTitle = (props) => {
  return (
    <div className="page-title ">
      <div className="row flex between res-page-title">
        <div className="title">
          <h1>Product</h1>
        </div>
        <div className="breadcrumb-list">
          <ul className="breadcrumb flex between">
            <li className="breadcrumb-items">
              <a href="./">
                <HomeIcon></HomeIcon>
              </a>
            </li>
            <li className="breadcrumb-items">
              <a href="./">Ecommerce</a>
            </li>
            <li className="breadcrumb-items">
              <a href="./">Product</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PageTitle;
