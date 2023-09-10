import React from "react";
import Card from "../Card/Card";
import "./newarrival.css"

const Newarrivals = () => {

  const products = [
    {id :"1", _id : "64fa9dde57cdd1a97042b83e", images : [{url : "https://res.cloudinary.com/ddyg76fzs/image/upload/v1694144327/product/product1_oas4nw.jpg"}], category : "velvet", name : "Silk Elegance Collection", price : "251", seller : "Myntra" },

    {id :"2", _id : "64fa9dde57cdd1a97042b840", images : [{url : "https://res.cloudinary.com/ddyg76fzs/image/upload/v1694144329/product/product2_dcviz3.jpg"}], category : "velvet", name : "Leatherette Luxury", price : "2901" , seller : "Myntra"},

    {id :"3", _id : "64fa9dde57cdd1a97042b84a", images : [{url : "https://res.cloudinary.com/ddyg76fzs/image/upload/v1694144386/product/product6_jowlog.jpg"}], category : "velvet", name : "Faux Fur Finesse", price : "254" , seller : "Myntra"},

    {id :"4", _id : "64fa9dde57cdd1a97042b844", images : [{url : "https://res.cloudinary.com/ddyg76fzs/image/upload/v1694144340/product/product3_n3fzql.jpg"}],  category : "velvet", name : "Taffeta Twilight",price : "301", seller : "Myntra" },
  ];
  return (
    <div className="newArrival">
      <h2>Fresh from the Loom </h2>
        <h3>Explore Our Latest Arrivals!</h3>
      <div className="cardcomp">
      {products.map((product) => {
            return <Card key={product._id} product={product} />;
          })}
       
      </div>
    </div>
  );
};

export default Newarrivals;
