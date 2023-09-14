import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MDBDataTable } from "mdbreact";
import { useAlert } from "react-alert";

import Loader from "../layouts/Loader";
import MetaData from "../layouts/MetaData";
import { allOrders, clearErrors, delteOrder } from "../../actions/orderActions";
import { Fragment } from "react";
import { DELETE_ORDER_RESET } from "../../constants/orderConstant";

const Orderlist = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, orders, totalAmount } = useSelector(
    (state) => state.allOrders
  );
  const { isDeleted } = useSelector((state) => state.delUpdateOrder);

  useEffect(() => {
    dispatch(allOrders());

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Order deleted successfully.");
      navigate("/admin/orders");
      dispatch({ type: DELETE_ORDER_RESET });
    }
  }, [dispatch, error, alert, navigate, isDeleted]);

  const delOrderHandler = (id) => {
    dispatch(delteOrder(id));
    alert.success(`order with id ${id} has been deleted`);
  };
  return (
    <div>
      <MetaData title={"All Orders"} />
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="sidebar">
            <div className="logo_details">
              <div className="logo_name">
                $ {totalAmount && totalAmount.toFixed(2)}
              </div>
            </div>
            <ul>
              <li>
                <Link to="/dashboard" className="">
                  <i className="bx bx-grid-alt"></i>
                  <span className="links_name">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/products">
                  <i className="bx bx-user"></i>
                  <span className="links_name">Products</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/orders" className="active">
                  <i className="bx bxs-cart-add"></i>
                  <span className="links_name">Orders</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/users">
                  <i className="bx bxs-truck"></i>
                  <span className="links_name">Users</span>
                </Link>
              </li>
              <li>
              <Link to="/admin/createproduct">
                <i className="bx bxs-truck"></i>
                <span className="links_name">Create product</span>
              </Link>
            </li>
            </ul>
          </div>
          <div className="home_section">
            <table className="containerx">
              <thead>
                <tr>
                  <th>
                    <h1>Id</h1>
                  </th>
                  <th>
                    <h1>Num of Items</h1>
                  </th>
                  <th>
                    <h1>Amount</h1>
                  </th>
                  <th>
                    <h1>Status</h1>
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
                      <td>{order.orderItems.length}</td>
                      <td>{`$${order.totalPrice}`}</td>
                      <td>{order.orderStatus}</td>
                      <td>
                        <Link
                          to={`/admin/order/${order._id}`}
                          className="btn btn-primary productlink"
                          style={{display : "inline"}}
                        >
                          <i className="fa-regular fa-pen-to-square"></i>
                        </Link>
                        
                        <button
                          onClick={() => {
                            delOrderHandler(order._id);
                          }}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Orderlist;
