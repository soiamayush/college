import React, { Fragment, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrderDetails,
  updateOrder,
  clearErrors,
} from "../../actions/orderActions";
// import { UPDATE_ORDER_RESET } from '../../constants/orderConstants'
import MetaData from "../layouts/MetaData";
import Loader from "../layouts/Loader";
import { UPDATE_ORDER_RESET } from "../../constants/orderConstant";

const Processorder = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const params = useParams();

  const [status, setStatus] = useState("");
  const { loading, order = {} } = useSelector((state) => state.orderDetails);
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    user,
    totalPrice,
    orderStatus,
  } = order;
  const { error, isUpdated } = useSelector((state) => state.delUpdateOrder);

  const orderId = params.id;

  useEffect(() => {
    dispatch(getOrderDetails(orderId));

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Order updated successfully");
      dispatch({ type: UPDATE_ORDER_RESET });
    }
  }, [dispatch, alert, error, isUpdated, orderId]);

  const updateOrderHandler = (id) => {
    const formData = new FormData();
    formData.set("status", status);

    dispatch(updateOrder(id, formData));
    alert.success("The Order has been updated");
  };

  const shippingDetails =
    shippingInfo &&
    `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`;
  const isPaid =
    paymentInfo && paymentInfo.status === "succeeded" ? true : false;

  return (
    <div>
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
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

                    <h2  className="h2class">
                      order status: 
                      <select
                                    className="form-control"
                                    name='status'
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="Processing">Processing</option>
                                    <option value="Shipped">Shipped</option>
                                    <option value="Delivered">Delivered</option>
                                </select>
                    </h2>

                   

                    <button
                      className="custom-btn btn-7"
                      onClick={() => updateOrderHandler(order._id)}
                    >
                      <span>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Update status
                        </Link>{" "}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    </div>
  );
};

export default Processorder;
