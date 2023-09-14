import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../layouts/Loader";
import MetaData from "../layouts/MetaData";
import { myOrders, clearErrors } from "../../actions/orderActions";
import { useAlert } from "react-alert";
import "./table.scss";

const Myorder = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, orders } = useSelector((state) => state.myOrders);
  // {console.log(orders)}

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(myOrders());
  }, [dispatch, error, alert]);

  return (
    <>
      <MetaData title={"My orders"} />

    

      <table className="containerx">
        <thead>
          <tr>
            <th>
              <h1>Order Id</h1>
            </th>
            <th>
              <h1>Amount</h1>
            </th>
            <th>
              <h1>Status</h1>
            </th>
            <th>
              <h1>Num of items</h1>
            </th>
            <th>
              <h1>Actions</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr>
                <td>{order._id}</td>
                <td>{`$${order.totalPrice}`}</td>
                <td>{order.orderStatus}</td>
                <td>{order.orderItems.length}</td>
                <td>
                  <Link to={`/order/${order._id}`} className="btn btn-primary productlink">
                  <i className="fa-solid fa-eye"></i>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Myorder;
