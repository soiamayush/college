import React, { useEffect } from "react";
import "./Featured.css"
import { Link, useNavigate } from "react-router-dom"
import { getProducts } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";


const Featured = () => {
  const navigate  = useNavigate();

  const dispatch = useDispatch();


  const {
    loading,
    products
  } = useSelector((state) => state.products);


  useEffect(() => {
    dispatch(getProducts());
  }, []);


  const productz = products.slice(0, 4);
 
  return (
    <section className="hero-section">
      <h2 className="headingg">Top of the line products</h2>
      {/* <h4 style={{marginTop : "20px"}}>Most buy </h4> */}

    <div className="card-grid">

      {productz.map(item => (
          <Link className="card1"  to={`/product/${item._id}`} key={`${item._id}`}>
          <div className="card__background" style={{backgroundImage: `url(${item.images[0].url})`}}></div>
          <div className="card__content">
            <p className="card__category">{item.category}</p>
            <h3 className="card__heading">{item.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  </section>

  );
};

export default Featured;
