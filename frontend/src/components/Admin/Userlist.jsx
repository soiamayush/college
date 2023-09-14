import React, { Fragment, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layouts/MetaData'
import Loader from '../layouts/Loader'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { allUsers, deleteUser, clearErrors } from '../../actions/userActions'
import { DELETE_USER_RESET } from '../../constants/userContants'
import { allOrders } from '../../actions/orderActions'

const Userlist = () => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {  totalAmount } = useSelector(
        (state) => state.allOrders
      );

    const { loading, error, users } = useSelector(state => state.allUsers);
    const { isDeleted } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(allUsers());
        dispatch(allOrders());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('User deleted successfully');
            navigate('/admin/users');
            dispatch({ type: DELETE_USER_RESET})
        }

    }, [dispatch, alert, error, isDeleted, navigate])

    const deleteUserHandler = (id) => {
        dispatch(deleteUser(id))
    }

    return (
        <div>
            <MetaData title={'All Users'} />
            {loading ? <Loader/> : (
            <Fragment>
                    <div className="sidebar">
          <div className="logo_details">
            <div className="logo_name">$ {totalAmount && totalAmount.toFixed(2)}</div>
          </div>
          <ul>
            <li>
            <Link to="/dashboard" className="">
                <i className="bx bx-grid-alt"></i>
                <span className="links_name">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/products" >
                <i className="bx bx-user"></i>
                <span className="links_name">Products</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/orders" >
                <i className="bx bx-user"></i>
                <span className="links_name">Orders</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/users" className="active">
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
    <div className="home_section">

        <table className="containerx">
          <thead>
            <tr>
              <th>
                <h1>User Id</h1>
              </th>
              <th>
                <h1>Name</h1>
              </th>
              <th>
                <h1>Email</h1>
              </th>
              <th>
                <h1>Role</h1>
              </th>
              <th>
                <h1>Actions</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    {/* <Link to={`/admin/user/${user._id}`} className="btn btn-primary productlink" >
                    <i className="fa-regular fa-pen-to-square"></i>
                    </Link> */}
                    <button
                        onClick={() => deleteUserHandler(user._id)}
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
  )
}

export default Userlist