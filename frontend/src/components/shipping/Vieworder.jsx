import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

import Loader from "../layouts/Loader";
import MetaData from "../layouts/MetaData";
import { getOrderDetails, clearErrors } from "../../actions/orderActions";
import { Fragment } from "react";

const Vieworder = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const params = useParams();

  const { laoding, error, order = {}} = useSelector(state => state.orderDetails)
  const { shippingInfo, paymentInfo, user , totalPrice , orderStatus, orderItems } = order

  useEffect(() => {
      dispatch(getOrderDetails(params.id));
  
      if (error) {
        alert.error(error)
        dispatch(clearErrors());
      }
    }, [dispatch, error, alert, params.id]);

  const shippingDetails = shippingInfo && `${shippingInfo.address} , ${shippingInfo.city}, ${shippingInfo.postalCode} , ${shippingInfo.country}`

  const isPaid = paymentInfo && paymentInfo.status === "succeeded" ? true : false

  return (
    <div>
      <Fragment>
          <div className="loginparent">
            <MetaData title={"login"} />

            <div className="contntainerz">
              <div className="shadow-lg">
                <div id="logogo">
                  <h1 className="logogo">BECCA</h1>
                  <div className="CTA">
                    <h1 className="h1class" type="submit">
                      BECCA
                    </h1>
                  </div>
                </div>
                <div className="leftbox">
                  <nav className="sidebarr">
                    <Link id="profilele" className="">
                      <i className="fa fa-user"></i>
                    </Link>
                    <Link id="payment">
                      <i className="fa fa-credit-card"></i>
                    </Link>
                    <Link id="subscription">
                      <i className="fa fa-tv"></i>
                    </Link>
                    <Link id="privacy">
                      <i className="fa fa-tasks"></i>
                    </Link>
                    <Link id="settings">
                      <i className="fa fa-cog"></i>
                    </Link>
                  </nav>
                </div>
                <div className="rightboxz">
                  <div className="profilele">
                    <h3>Shiping Info of order id # {order._id}</h3>
                    <h2  className="h2class">User Name : {user && user.name}</h2>
                    <h2  className="h2class">
                      Phone : {shippingInfo && shippingInfo.phoneNo}
                    </h2>
                    <h2  className="h2class">Address : {shippingDetails}</h2>
                    <h2  className="h2class">Amount : ${totalPrice}</h2>
                    <h2  className="h2class">
                      Payment : {isPaid ? "PAID" : "NOT PAID"}
                    </h2>
                    <h2  className="h2class">
                      Stripe Id : {paymentInfo && paymentInfo.id}
                    </h2>
                    <h2  className="h2class">Order status : {orderStatus}</h2>
                    <span  className="h2class">
                      Order Items :
                      {orderItems &&
                        orderItems.map((item) => (
                          <dev key={item.product} className="row my-5">
                            <dev className="col-4 col-lg-2">
                              <img
                                src={item.image}
                                alt={item.name}
                                height="45"
                                width="65"
                              />
                            </dev>

                            <div className="col-5 col-lg-5">
                              <Link to={`/products/${item.product}`}>
                                {item.name}
                              </Link>
                            </div>

                            <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                              <p>${item.price}</p>
                            </div>

                            <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                              <p>{item.quantity} Piece(s)</p>
                            </div>
                          </dev>
                        ))}
                    </span>
                  

                   
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Fragment>
    </div>
  )
}

export default Vieworder