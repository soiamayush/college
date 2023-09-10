import "./cartpage.css";
import "../Productpage/productd.scss";
import { addItemToCart, removeItemFromCart } from "../../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layouts/MetaData";
import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cartpage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);
  
  
  
  const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingPrice = itemsPrice > 200 ? 0 : 25;
  const taxPrice = Number((0.05 * itemsPrice).toFixed(2));
  const totalPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2);

  const decreaseQty = (id, quantity) => {
    const newQty = quantity - 1;
    if (newQty <= 0) return;

    dispatch(addItemToCart(id, newQty));
  };

  const increaseQty = (id, quantity, stock) => {
    const newQty = quantity + 1;

    if (newQty > stock) return;

    dispatch(addItemToCart(id, newQty));
  };

  const removeCartItemHandler = (id) => {
    dispatch(removeItemFromCart(id));
    alert("Item Removed")
  };

  const checkoutHandler = () => {
    navigate("/");
    // navigate("/login?redirect=/shipping");
  };

  return (

    <Fragment >
      <MetaData title={"Cart"} />
      {cartItems.length === 0 ? (
        <div>
        <div className="wrapp cf">
          <h1 className="projTitle">
            {/* Responsive Table<span>-Less</span> Shopping Cart {cartItems.length} */}
            Oops!! Your cart is Empty
          </h1>
          <div className="heading cf">
            <h1>My Cart : Total items {cartItems.length}</h1>
            <span></span>
            <Link to="/shop" className="continue">
              Continue Shopping
            </Link>
          </div>
          </div>
          </div>
      ) : (
        <div>
          <div className="wrapp cf">
            <h1 className="projTitle">
              {/* Responsive Table<span>-Less</span> Shopping Cart {cartItems.length} */}
              Checkout Your <span>Fabric</span> Choices
            </h1>
            <div className="heading cf">
              <h1>My Cart : Total items {cartItems.length}</h1>
              <span></span>
              <Link to="/shop" className="continue">
                Continue Shopping
              </Link>
            </div>
            <div className="cart">
              <ul className="cartwrapp">
                {cartItems.map((item, index) => (
                  <li className={`items ${index % 2 == 0 ? " odd" : " even"}`} key={index}>
                    <div className="infowrapp">
                      <div className="cartSection">
                        <img src={item.image} alt="" className="itemImg" />
                        <p className="itemNumber">{item.length}</p>
                        <div className="cartleft">
                          <h3>{item.name}</h3>{" "}
                          <div className="quantity">
                            <a className="quantity__minus" title="Decrement">
                              <span
                                onClick={() =>
                                  decreaseQty(
                                    item.product,
                                    item.quantity,
                                    item.stock
                                  )
                                }
                                style={{ textDecoration: "none" }}
                              >
                                {" "}
                                -{" "}
                              </span>
                            </a>
                            <input
                              name="quantity"
                              type="text"
                              className="quantity__input"
                              value={item.quantity}
                              readOnly
                            />
                            <a className="quantity__plus" title="Increment">
                              <span
                                onClick={() =>
                                  increaseQty(
                                    item.product,
                                    item.quantity,
                                    item.stock
                                  )
                                }
                              >
                                {" "}
                                +{" "}
                              </span>
                            </a>
                          </div>
                          <p className="stockStatus">
                            {" "}
                            $ {item.price} In Stock
                          </p>
                        </div>
                      </div>

                     
                      <div className="cartSection removewrapp">
                        <Link
                          onClick={() => removeCartItemHandler(item.product)}
                          className="remove"
                        >
                          x
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* */}


            <div className="subtotal cf">
              <ul style={{listStyle : "none"}}>
                <li className="totalRow">
                  <span className="label">Subtotal</span>
                  <span className="value">${cartItems
                            .reduce(
                              (acc, item) => acc + item.quantity * item.price,
                              0
                            )
                            .toFixed(2)} </span>
                </li>

                <li className="totalRow">
                  <span className="label">Shipping</span>
                  <span className="value">${shippingPrice}</span>
                </li>

                <li className="totalRow">
                  <span className="label">Tax</span>
                  <span className="value">$ {taxPrice}</span>
                </li>
                <li className="totalRow final">
                  <span className="label">Total</span>
                  <span className="value">${totalPrice}</span>
                </li>
                <li className="totalRow">
                  <Link
                    className="btnc continue"
                    onClick={checkoutHandler}
                    to="/login?redirect=/shipping"
                  >
                    Checkout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Cartpage;
