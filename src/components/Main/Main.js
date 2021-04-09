import React, { useEffect, useState } from "react";
import "./main.css";
import PageTitle from "./PageTitle";
import Product from "./Product";
const Main = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function fetchProductList() {
      try {
        const requestUrl = "https://fakestoreapi.com/products";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const dataProduct = responseJSON;
        setProductList(dataProduct);
      } catch (error) {
        console.log("Failed to fletch product list", error.message);
      }
    }
    fetchProductList();
  }, []);

  return (
    <div className="main">
      <PageTitle></PageTitle>
      <Product products = {productList}></Product>
    </div>
  );
};

export default Main;
