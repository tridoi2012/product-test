import React from "react";
import AppsIcon from "@material-ui/icons/Apps";
import TocIcon from "@material-ui/icons/Toc";

const FeatureProduct = ({ style, getStyleList }) => {
  const hadleTableChange = () => {
    getStyleList("flex");
  };
  const handleTocChange = () => {
    getStyleList("block");
  };
  return (
    <div>
      <div className="flex change-button">
        <div className="button">
          <button onClick={hadleTableChange} className="button-handle">
            <AppsIcon></AppsIcon>
          </button>
        </div>
        <div className="button">
          <button className="button-handle" onClick={handleTocChange}>
            <TocIcon></TocIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
