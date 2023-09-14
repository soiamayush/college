import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

import Loader from "../layouts/Loader";
import MetaData from "../layouts/MetaData";
import { getAdminProduct, clearErrors, deleteProduct } from "../../actions/productAction"
import { Fragment } from "react";
import { DELETE_PRODUCT_RESET } from "../../constants/productConstants";
import { allOrders } from "../../actions/orderActions";

const Productlist = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
      const navigate = useNavigate();

      const { totalAmount } = useSelector(
        (state) => state.allOrders
      );
  
    const { loading, error, products } = useSelector((state) => state.products);
    const { error : deleteError , isDeleted } = useSelector((state) => state.delUpdateProduct);
  
    useEffect(() => {
      dispatch(getAdminProduct());
      dispatch(allOrders());
  
      if (error) {
        alert.error(error)
        dispatch(clearErrors());
      }
  
      if (deleteError) {
        alert.error(deleteError)
        dispatch(clearErrors());
      }
  
      if (isDeleted) {
        alert.success("Your product deleted successfully.")
        navigate("/admin/products")
        dispatch({ type : DELETE_PRODUCT_RESET});
      }
    }, [dispatch, error, alert, isDeleted, deleteError, navigate]);
  
    
  
    const deleteHandler = (id) => {
      dispatch(deleteProduct(id))
    }
  return (
    <div>
        <MetaData title={'All Products'} />
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
              <Link to="/admin/products" className="active">
                <i className="bx bx-user"></i>
                <span className="links_name">Products</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/orders">
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
      <table className="containerx ">
        <thead>
          <tr>
            <th>
              <h1>Id</h1>
            </th>
            <th>
              <h1>Name</h1>
            </th>
            <th>
              <h1>Price</h1>
            </th>
            <th>
              <h1>Stock</h1>
            </th>
            <th>
              <h1>Actions</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => (
              <tr>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{`$${product.price}`}</td>
                <td>{product.stock}</td>
                <td>
                  <Link to={`/admin/products/${product._id}`} className="btn btn-primary productlink" style={{display : "inline"}}>
                  <i className="fa-regular fa-pen-to-square"></i>
                  </Link>
                  <button onClick={()=> (deleteHandler(product._id)) }>
                  <i className="fa-solid fa-trash " ></i>
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

export default Productlist