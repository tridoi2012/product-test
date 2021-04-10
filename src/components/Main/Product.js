import React from "react";

function Product({ title, category, price, image }) {
  return (
    <div className="product">
      <div className="product-items flex ">
        <div className="product-item">
          <div className="product-img">
            <img src={image} alt="./"></img>
          </div>
          <div className="product-info">
            <a className="product-title" href="/">
              {title}
            </a>
            <div className="product-des">
              <p>{category}</p>
            </div>
            <div className="product-price">
              <p>${price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
