import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetails,
  clearErrors,
  newReview,
} from "../../actions/productAction";
import Loader from "../layouts/Loader";
import MetaData from "../layouts/MetaData";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addItemToCart } from "../../actions/cartActions";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";
import "./productd.scss";
import { useAlert } from "react-alert";

const productctDetails = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: "1",
      _id: "64fa9dde57cdd1a97042b83e",
      images: [
        {
          url: "https://res.cloudinary.com/ddyg76fzs/image/upload/v1694144327/product/product1_oas4nw.jpg",
        },
      ],
      category: "velvet",
      name: "Silk Elegance Collection",
      price: "251",
      seller: "Myntra",
    },

    {
      id: "2",
      _id: "64fa9dde57cdd1a97042b840",
      images: [
        {
          url: "https://res.cloudinary.com/ddyg76fzs/image/upload/v1694144329/product/product2_dcviz3.jpg",
        },
      ],
      category: "velvet",
      name: "Leatherette Luxury",
      price: "2901",
      seller: "Myntra",
    },

    {
      id: "3",
      _id: "64fa9dde57cdd1a97042b84a",
      images: [
        {
          url: "https://res.cloudinary.com/ddyg76fzs/image/upload/v1694144386/product/product6_jowlog.jpg",
        },
      ],
      category: "velvet",
      name: "Faux Fur Finesse",
      price: "254",
      seller: "Myntra",
    },

    {
      id: "4",
      _id: "64fa9dde57cdd1a97042b844",
      images: [
        {
          url: "https://res.cloudinary.com/ddyg76fzs/image/upload/v1694144340/product/product3_n3fzql.jpg",
        },
      ],
      category: "velvet",
      name: "Taffeta Twilight",
      price: "301",
      seller: "Myntra",
    },
  ];

  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const alert = useAlert();

  const dispatch = useDispatch();
  const params = useParams();
  const { error, product, loading } = useSelector(
    (state) => state.productDetails
  );
  const { user } = useSelector((state) => state.auth);
  const { error: reviewError, success } = useSelector(
    (state) => state.newReview
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(params.id));

    if (reviewError) {
      // alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      // alert.success("Review posted successfully")
      dispatch({ type: NEW_REVIEW_RESET });
    }
  }, [dispatch, error, reviewError, params.id, success]);

  const decreaseQty = () => {
    const count = document.querySelector(".count");

    if (count.valueAsNumber <= 1) return;

    const qty = count.valueAsNumber - 1;
    setQuantity(qty);
  };

  const increaseQty = () => {
    const count = document.querySelector(".count");

    if (count.valueAsNumber >= product.stock) return;

    const qty = count.valueAsNumber + 1;
    setQuantity(qty);
  };

  const addToCart = () => {
    if (user) {
      dispatch(addItemToCart(params.id, quantity));
      alert.success("Added successfully");
    } else {
      alert.success("Login first to access this resource!!");
    }
  };

  function setUserRatings() {
    const stars = document.querySelectorAll(".star");

    stars.forEach((star, index) => {
      star.starValue = index + 1;

      ["click", "mouseover", "mouseout"].forEach(function (e) {
        star.addEventListener(e, showRatings);
      });
    });

    function showRatings(e) {
      stars.forEach((star, index) => {
        if (e.type === "click") {
          if (index < this.starValue) {
            star.classList.add("orange");
            setRating(this.starValue);
          } else {
            star.classList.remove("orange");
          }
        }
        if (e.type === "mouseover") {
          if (index < this.starValue) {
            star.classList.add("yellow");
          } else {
            star.classList.remove("yellow");
          }
        }
        if (e.type === "mouseout") {
          star.classList.remove("yellow");
        }
      });
    }
  }

  const reviewHandler = () => {
    const formData = new FormData();

    formData.set("rating", rating);
    formData.set("comment", comment);
    formData.set("productId", params.id);

    dispatch(newReview(formData));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={product.name} />
          <section id="prodetails" className="section-p1">
            <div className="single-pro-image">
              <img
                src={product.images && product.images[0].url}
                width="100%"
                id="MainImg"
                alt=""
                className="pdimg"
              />
              <div className="small-img-group">
                <div className="small-img-col">
                  <img
                    src="img/products/f1.jpg"
                    width="100%"
                    className="small-img"
                    alt=""
                  />
                </div>
                <div className="small-img-col">
                  <img
                    src="img/products/f2.jpg"
                    width="100%"
                    className="small-img"
                    alt=""
                  />
                </div>
                <div className="small-img-col">
                  <img
                    src="img/products/f3.jpg"
                    width="100%"
                    className="small-img"
                    alt=""
                  />
                </div>
                <div className="small-img-col">
                  <img
                    src="img/products/f4.jpg"
                    width="100%"
                    className="small-img"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="single-pro-details">
              <div className="dflex">
                <h1>{product.name}</h1>
              </div>
              {/* <input style={{ borderRadius: "20px" }} type="number" value="1" /> */}
              <div className="pd">
                <div className="pdsecond">
                  <h4>Product Details</h4>
                  <span style={{ lineHeight: "25px" }}>
                    {product.description}
                  </span>

                  <h6 style={{ marginTop: "20px", fontSize: "20px" }}>
                    By - {product.seller}
                  </h6>
                </div>

                <div className="pdfirst">
                  <h2>$ {product.price}.00</h2>
                  <div className="flexy">
                    <div className="quantity">
                      <a className="quantity__minus" title="Decrement">
                        <span
                          onClick={decreaseQty}
                          style={{ textDecoration: "none" }}
                        >
                          {" "}
                          -{" "}
                        </span>
                      </a>
                      <input
                        name="quantity"
                        type="number"
                        readOnly
                        className="quantity__input count"
                        value={quantity}
                      />
                      <a className="quantity__plus" title="Increment ">
                        <span onClick={increaseQty}> + </span>
                      </a>
                    </div>
                    {/* <button
                  className="normal"
                  onClick={addToCart}
                  disabled={product.stock === 0}
                >
                  Add To Cart
                </button> */}
                    <button
                      className="custom-btn btn-7"
                      onClick={addToCart}
                      disabled={product.stock === 0}
                    >
                      <span>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Add to cart
                        </Link>{" "}
                      </span>
                    </button>
                  </div>
                  <p>
                    Status :{" "}
                    {product.stock > 0 ? (
                      <span style={{ color: "green" }}>In stock</span>
                    ) : (
                      <span style={{ color: "red" }}>out of stock</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="product1" className="">
            <h2>Featured Products</h2>
            <p>Summer Collection New Modern Design</p>

            <section className="hero-section" style={{ marginTop: "25px" }}>
              <div className="card-grid">
                {products.map((item) => (
                  <Link
                    className="card1"
                    to={`/product/${item._id}`}
                    key={`${item._id}`}
                  >
                    <div
                      className="card__background"
                      style={{ backgroundImage: `url(${item.images[0].url})` }}
                    ></div>
                    <div className="card__content">
                      <p className="card__category">{item.category}</p>
                      <h3 className="card__heading">{item.name}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </section>
        </>
      )}
    </>
  );
};

export default productctDetails;
