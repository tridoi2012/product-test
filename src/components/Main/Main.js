import React, { useEffect, useState } from "react";
import "./main.css";
import PageTitle from "./PageTitle";
import Product from "./Product";
import FeatureProduct from "./FeatureProduct";

const Main = () => {
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState("");
  const [productActive, setproductActive] = useState(null);
  const [styleList, setStyleList] = useState("flex");

  useEffect(() => {
    async function fetchProductList() {
      try {
        const requestUrl = "https://fakestoreapi.com/products";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const dataProduct = responseJSON;
        console.log(dataProduct);
        setProductList(dataProduct);
      } catch (error) {
        console.log("Failed to fletch product list", error.message);
      }
    }
    fetchProductList();
  }, []);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value.toLowerCase());
  };
  const getSearch = (e) => {
    e.preventDefault();
    // console.log(search.toLowerCase().trim());
    const valueFilters = search.toLowerCase().trim();
    const valueSearch = productList.filter((product) => {
      return product.title.toLowerCase().search(valueFilters) > 0;
    });
    setproductActive(valueSearch);
    setSearch("");
  };

  const getStyleListProducts = (style) => {
     setStyleList(style);
     console.log(styleList);
  };

  return (
    <div className="main">
      <PageTitle></PageTitle>
      <div className="feature-product">
        <div className="row">
          <FeatureProduct style={styleList} getStyleList={getStyleListProducts} ></FeatureProduct>
        </div>
      </div>
      <div className="flex form-filter">
        <form className="search-form" onSubmit={getSearch}>
          <input
            placeholder="Search"
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          />
        </form>
      </div>

      <div className="main-products">
        <div className={`products ${styleList}`}>
          {productActive ? (
            productActive.length ? (
              productActive.map((product) => (
                <Product
                  title={product.title}
                  image={product.image}
                  key={product.id}
                  category={product.category}
                  price={product.price}
                ></Product>
              ))
            ) : (
              <div>not found item</div>
            )
          ) : (
            productList.map((product) => (
              <Product
                title={product.title}
                image={product.image}
                key={product.id}
                category={product.category}
                price={product.price}
              ></Product>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
