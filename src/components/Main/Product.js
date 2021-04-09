import React from "react";
import PropTypes from "prop-types";

Product.propTypes = {
  products: PropTypes.array,
};

Product.defaultProps = {
  products: [],
};

function Product(props) {
  const { products } = props;
  return (
    <div className="main-products">
      <div className="products flex">
        {products.map((product) => (
          <div key={product.id} className="product-items">
            <div className="product-img">
              <img src={product.image}></img>
            </div>
            <a className="product-title" href="/">
              {product.title}
            </a>
            <div className="product-des">
              <p>{product.category}</p>
            </div>
            <div className="product-price">
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
