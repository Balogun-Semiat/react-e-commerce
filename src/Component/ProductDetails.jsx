import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const id = params.id;
  console.log("Id : ", id);
  const [products, setProducts] = useState([]);
  const [SingleProduct, setSingleProduct] = useState({});
  

  useEffect(() => {
    fetch("http://localhost:5000/All-Products", {
      headers:{},
      method:"GET"
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("All Products : ", json);
        setProducts(json);
      });
  }, []);

  useEffect(() => {
    if (products && products.length > 0) {
      const findProduct = products.find((data) => data.id === Number(id));
      console.log("Received Product : ", findProduct);
      setSingleProduct(findProduct);
    }
  }, [products]);

  return (
    <div>
      <Navbar />
      {/* <h1>Rendering id for product {id}</h1> */}

      <div className="grid md:grid-cols-2 gap-8 items-center w-11/12 mx-auto">
        <div className="w-8/12 mx-auto">
        <img className='-z-1' src= {SingleProduct.ProductImage} alt="" />
        </div>
        <div className="grid gap-4">
          <h1 className="text-xl md:text-2xl font-sans">
            {SingleProduct.title}
          </h1>
          <h1 className="text-sm md:text-xl font-sans">
            {SingleProduct.ProductCategory}
          </h1>
          <h1 className="text-md  font-sans">{SingleProduct.ProductDescription}</h1>
          <button className="w-44 py-3 rounded-lg bg-slate-800 text-white">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;