import React, { Fragment, useEffect } from "react";

import MetaData from "../layouts/MetaData";
import Loader from "../layouts/Loader";
import { Link } from "react-router-dom";
import { getAdminProduct } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { allOrders } from "../../actions/orderActions";
import { allUsers } from "../../actions/userActions";
import "./dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { orders, totalAmount, loading } = useSelector(
    (state) => state.allOrders
  );
  const { users } = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(allOrders());
    dispatch(allUsers());
  }, [dispatch]);

  let outOfStock = 0;
  products.forEach((product) => {
    if (product.stock === 0) {
      outOfStock += 1;
    }
  });

  return (
    <Fragment>
      <MetaData title={"Dashboard"} />

      <div className="conty">
        <div className="sidebar">
          <div className="logo_details">
            {/* <i className="bx bx-code-alt"></i> */}
            <div className="logo_name">$ {totalAmount && totalAmount.toFixed(2)}</div>
          </div>
          <ul>
            <li>
              <Link to="/dashboard" className="active">
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
              <Link to="/admin/orders">
                <i className="bx bx-user"></i>
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
            <li className="login">
              <a href="#">
                <span className="links_name login_out">Login Out</span>
                <i className="bx bx-log-out" id="log_out"></i>
              </a>
            </li>
          </ul>
        </div>
        <section className="home_section">
          <div className="card-boxes">
            <div className="box">
              <Link to="/admin/products" style={{ textDecoration: "none" }}>
                <div className="right_side">
                  <div className="numbers">{products && products.length}</div>
                  <div className="box_topic">Total Products</div>
                </div>
              </Link>
              <Link to="/admin/products" style={{ textDecoration: "none" }}>
                <i className="bx bx-cart-alt"></i>
              </Link>
            </div>
            <div className="box">
              <Link to="/admin/orders" style={{ textDecoration: "none" }}>
                <div className="right_side">
                  <div className="numbers">{orders && orders.length}</div>
                  <div className="box_topic">Total Orders</div>
                </div>
              </Link>
              <Link to="/admin/orders" style={{ textDecoration: "none" }}>
                <i className="bx bxs-cart-add"></i>
              </Link>
            </div>
            <div className="box">
              <Link to="/admin/users" style={{ textDecoration: "none" }}>
                <div className="right_side">
                  <div className="numbers">{users && users.length}</div>
                  <div className="box_topic">Total Users</div>
                </div>
              </Link>
              <Link to="/admin/users" style={{ textDecoration: "none" }}>
                <i className="bx bx-cart"></i>
              </Link>
            </div>
            <div className="box">
                <div className="right_side">
                  <div className="numbers">{outOfStock}</div>
                  <div className="box_topic">Total Out of stock items</div>
                </div>
                <i className="bx bxs-cart-download"></i>
            </div>
          </div>
          <div className="details">
            <div className="recent_project">
              <div className="card_header">
                <h2>Lastet Products</h2>
              </div>
              <table>
                <thead>
                  <tr>
                    <td>Project Name</td>
                    <td>Hours</td>
                    <td>Priority</td>
                    <td>Members</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dropbox Design System</td>
                    <td>34</td>
                    <td>
                      <span className="badge bg_worning">Meduim</span>
                    </td>
                    <td>
                      <span className="img_group">
                        <img src="img/avatar-2.jpg" alt="" />
                      </span>
                      <span className="img_group">
                        <img src="img/avatar-3.jpg" alt="" />
                      </span>
                      <span className="img_group">
                        <img src="img/avatar-4.jpg" alt="" />
                      </span>
                      <span className="img_group">
                        <span className="initial">+5</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Slack Team UI Design</td>
                    <td>47</td>
                    <td>
                      <span className="badge bg_danger">Higt</span>
                    </td>
                    <td>
                      <span className="img_group">
                        <img src="img/avatar-5.jpg" alt="" />
                      </span>
                      <span className="img_group">
                        <img src="img/avatar-2.jpg" alt="" />
                      </span>
                      <span className="img_group">
                        <img src="img/avatar-3.jpg" alt="" />
                      </span>
                      <span className="img_group">
                        <span className="initial">+5</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Github Satellite</td>
                    <td>120</td>
                    <td>
                      <span className="badge bg_info">Low</span>
                    </td>
                    <td>
                      <span className="img_group">
                        <img src="img/avatar-4.jpg" alt="" />
                      </span>
                      <span className="img_group">
                        <img src="img/avatar-5.jpg" alt="" />
                      </span>
                      <span className="img_group">
                        <img src="img/avatar-2.jpg" alt="" />
                      </span>
                      <span className="img_group">
                        <span className="initial">+1</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>3D character Moddelling</td>
                    <td>89</td>
                    <td>
                      <span className="badge bg_worning">Meduim</span>
                    </td>
                    <td>
                      <span className="img_group">
                        <img src="img/avatar-3.jpg" alt="" />
                      </span>
                      <span className="img_group">
                        <img src="img/avatar-4.jpg" alt="" />
                      </span>
                      <span className="img_group">
                        <img src="img/avatar-5.jpg" alt="" />
                      </span>
                      <span className="img_group">
                        <span className="initial">+5</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Web app Design System</td>
                    <td>108</td>
                    <td>
                      <span className="badge bg_seccuss">Track</span>
                    </td>
                    <td>
                      <span className="img_group">
                        <img src="img/avatar-2.jpg" alt="" />
                      </span>
                      <span className="img_group">
                        <img src="img/avatar-3.jpg" alt="" />
                      </span>
                      <span className="img_group">
                        <img src="img/avatar-4.jpg" alt="" />
                      </span>
                      <span className="img_group">
                        <span className="initial">+5</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Github Event Design</td>
                    <td>120</td>
                    <td>
                      <span className="badge bg_info">Low</span>
                    </td>
                    <td>
                      <span className="img_group">
                        <img src="img/avatar-5.jpg" alt="" />
                      </span>
                      <span className="img_group">
                        <img src="img/avatar-2.jpg" alt="" />
                      </span>
                      <span className="img_group">
                        <img src="img/avatar-3.jpg" alt="" />
                      </span>
                      <span className="img_group">
                        <span className="initial">+1</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="recent_customers">
              <div className="card_header">
                <h2>New Users</h2>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div className="info_img">
                        <img src="img/avatar-2.jpg" alt="" />
                      </div>
                    </td>
                    <td>
                      <h4>Willams Harris</h4>
                      <span>Willams@gmail.com</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="info_img">
                        <img src="img/avatar-3.jpg" alt="" />
                      </div>
                    </td>
                    <td>
                      <h4>Vanessa Tucker</h4>
                      <span>Vanessa@gmail.com</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="info_img">
                        <img src="img/avatar-4.jpg" alt="" />
                      </div>
                    </td>
                    <td>
                      <h4>Sharon Lessma</h4>
                      <span>Sharon@gmail.com</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="info_img">
                        <img src="img/avatar-5.jpg" alt="" />
                      </div>
                    </td>
                    <td>
                      <h4>Christina Mason</h4>
                      <span>Christina@gmail.com</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="info_img">
                        <img src="img/avatar-2.jpg" alt="" />
                      </div>
                    </td>
                    <td>
                      <h4>Willams Harris</h4>
                      <span>Willams@gmail.com</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="info_img">
                        <img src="img/avatar-3.jpg" alt="" />
                      </div>
                    </td>
                    <td>
                      <h4>Sharon Lessma</h4>
                      <span>Willams@gmail.com</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Dashboard;
