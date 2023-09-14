import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

import MetaData from "../layouts/MetaData";
import {
  updateProduct,
  getProductDetails,
  clearErrors,
} from "../../actions/productAction";

import { UPDATE_PRODUCT_RESET } from "../../constants/productConstants";
import { Fragment } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Loader from "../layouts/Loader";

const Updateproduct = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [seller, setSeller] = useState("");
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const alert = useAlert();
  const dispatch = useDispatch();

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

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.delUpdateProduct);
  const { error, product } = useSelector((state) => state.productDetails);

  const productId = params.id;

  useEffect(() => {
    if (product && product._id !== productId) {
      dispatch(getProductDetails(productId));
    } else {
      setName(product.name);
      setPrice(product.price);
      setDescription(product.description);
      setCategory(product.category);
      setSeller(product.seller);
      setStock(product.stock);
      setOldImages(product.images);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      navigate("/admin/products");
      alert.success("Product updated successfully");
      dispatch({ type: UPDATE_PRODUCT_RESET });
    }
  }, [
    dispatch,
    alert,
    error,
    isUpdated,
    navigate,
    updateError,
    product,
    productId,
  ]);

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

    dispatch(updateProduct(product._id, formData));
  };

  const onChange = (e) => {
    const files = Array.from(e.target.files);

    setImagesPreview([]);
    setImages([]);
    setOldImages([]);

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
          <MetaData title={"login"} />
          <div className="login-page">
            <div className="formrm">
              <form className="login-form" onSubmit={submitHandler}>
                <label className="pname">Product Name</label>
                <input
                  type="text"
                  placeholder="Name of the product"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="pname">Product Price</label>
                <input
                  type="number"
                  placeholder="Price of the product"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <label className="pname">Product Description</label>
                <textarea
                  className="form-control txtarea"
                  id="description_field"
                  rows="8"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>

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

                <label className="pname">Product Stock</label>
                <input
                  type="number"
                  placeholder="Price of the product"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />

                <label className="pname">Seller Name</label>
                <input
                  type="text"
                  placeholder="Price of the product"
                  value={seller}
                  onChange={(e) => setSeller(e.target.value)}
                />

                <div className="custom-file">
                  <input
                    type="file"
                    name="avatar"
                    className="custom-file-input"
                    id="customFile"
                    accept="image/*"
                    onChange={onChange}
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    Choose Product Photo
                  </label>
                </div>

                <button disabled={loading ? true : false}>Update</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Updateproduct;
