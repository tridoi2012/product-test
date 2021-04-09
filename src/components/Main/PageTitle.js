import React from "react";
import "./main.css";

const PageTitle = (props) => {
  return (
    <div className="page-title ">
      <div className="row flex between">
        <div className="title">
          <h3>product</h3>
        </div>
        <div className>
          <ul className="breadcrumb flex between">
            <li className="breadcrumb-items">1</li>
            <li className="breadcrumb-items">Ecommerce</li>
            <li className="breadcrumb-items">Product</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PageTitle;
