import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Shop.css";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../actions/productAction";
import Loader from "../layouts/Loader"
import { useParams } from "react-router-dom";
import MetaData from "../layouts/MetaData";


const Shop = () => {
  const dispatch = useDispatch();


  const {
    loading,
    products
  } = useSelector((state) => state.products);


  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (

    <div className="shop">
       {loading ? (
        <Loader />
      ) : (
        <>
            <MetaData title="Fabric Dreams Delivered Here"/>
        <h2 >Unleash Your Creativity with Our Fabric Selection</h2>
        <div className="cardcomp">
          {products.map((product) => {
            return <Card key={product._id} product={product} />;
          })}
  
        </div>
        <main>
          <img
            src="https://cdn.pixabay.com/photo/2016/04/23/22/01/woman-1348365_1280.png"
            alt=""
            className="bg"
          />
          <img
            src="https://cdn.pixabay.com/photo/2012/04/13/13/57/scallop-32506_960_720.png"
            alt=""
            className="bg2"
          />
        </main>
        </>
      )}
     
    </div>
  );
};

export default Shop;
