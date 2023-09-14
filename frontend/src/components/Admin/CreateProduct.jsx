import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

import MetaData from "../layouts/MetaData";
import { newProduct, clearErrors } from "../../actions/productAction";

import { NEW_PRODUCT_RESET } from "../../constants/productConstants";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../layouts/Loader";
import { Link } from "react-router-dom"
import { allOrders } from "../../actions/orderActions";

const CreateProduct = () => {
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();

  const {  totalAmount } = useSelector(
    (state) => state.allOrders
  );

  useEffect(() => {
    dispatch(allOrders());
  }, [dispatch]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [seller, setSeller] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const categories = [
    // "electronics",
    // "cameras",
    // "laptops",
    // "accessories",
    // "headphones",
    // "food",
    // "books",
    // "clothes/shoes",
    // "beauty/health",
    // "sports",
    // "outdoor",
    // "home",
    "velvet"
  ];



  const { loading, error, success } = useSelector((state) => state.newProduct);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      navigate("/admin/products");
      alert.success("Product created successfully");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, success, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("price", price);
    formData.set("description", description);
    formData.set("category", category);
    formData.set("stock", stock);
    formData.set("seller", seller);

    images.forEach((image) => {
      formData.append("images", image);
    });

    dispatch(newProduct(formData));

    // const data = { name , price , description, category, stock, seller}

    // images.forEach(image => {
    //     data.append('images', image)
    // })

    // dispatch(newProduct(data))
  };

  const onChange = (e) => {
    const files = Array.from(e.target.files);

    setImagesPreview([]);
    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((oldArray) => [...oldArray, reader.result]);
          setImages((oldArray) => [...oldArray, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="loginparent">
          <MetaData title={"New Product"} />

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
                <Link to="/admin/orders" className="">
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
              <Link to="/admin/createproduct" className="active">
                <i className="bx bxs-truck"></i>
                <span className="links_name">Create product</span>
              </Link>
            </li>
            </ul>
          </div>

          <div className="login-page">
            <div className="formrm">
              <form className="login-form" onSubmit={submitHandler}>
              <label htmlFor="category_field " className="pname">Name of the product</label>
                <input
                  type="text"
                  placeholder="product name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              <label htmlFor="category_field " className="pname">Price</label>
                <input
                  type="number"
                  placeholder="Product price"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <label htmlFor="description_field"  className="pname">Description</label>
                <textarea
                  className="form-control txtarea"
                  id="description_field"
                  rows="8"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <div className="form-group">
                  <label htmlFor="category_field " className="pname">Category</label>
                  <select
                    className="form-control txtarea"
                    id="category_field"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="stock_field" className="pname">Stock</label>
                  <input
                    type="number"
                    id="stock_field"
                    className="form-control"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
                <label htmlFor="seller_field" className="pname">Seller Name</label>
                <input
                  type="text"
                  id="seller_field"
                  className="form-control"
                  value={seller}
                  onChange={(e) => setSeller(e.target.value)}
                />

                <div className="form-group">
                  <label className="pname">Images</label>

                  <div className="custom-file" style={{marginBottom : "10px"}}>
                    <input                    
                      type="file"
                      name="product_images"
                      className="custom-file-input"
                      id="customFile"
                      onChange={onChange}
                      multiple
                    />
                    <label className="custom-file-label"  htmlFor="customFile">
                      Choose Images
                    </label>

                    {imagesPreview.map((img) => (
                      <img
                        src={img}
                        key={img}
                        alt="Images Preview"
                        className="mt-3 mr-2"
                        width="55"
                        height="52"
                      />
                    ))}
                  </div>
                </div>

                {/* <div
                  className="profile-image-uploader"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  {selectedImage ? (
                    <img src={selectedImage} alt="Profile" />
                  ) : (
                    <div className="upload-text">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={onChange}
                        name="avatar"
                        id="fileInput"
                        style={{ display: "none" }}
                      />
                      <label htmlFor="fileInput">
                        Drag & Drop or Click to Upload
                      </label>
                    </div>
                  )}
                </div> */}
                <button disabled={loading ? true : false} type="submit">
                  create
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CreateProduct;
