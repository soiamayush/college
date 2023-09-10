import "./login.css";
import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layouts/MetaData";
import { register, clearErrors } from "../../actions/userActions";
import { useNavigate, Link } from "react-router-dom";
import defaultavatar from "../../assets/images/default_avatar.jpg";
import Loader from "../layouts/Loader";
import { useAlert } from "react-alert";

const Register = () => {const [user, setUser] = useState({
  name: "",
  email: "",
  password: "",
});

const { name, email, password } = user;

const [profile, setprofile] = useState("");
const [profilePreview, setprofilePreview] = useState(
  defaultavatar
);

const dispatch = useDispatch();

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
const alert = useAlert();


const { isAuthenticated, loading, error } = useSelector(
  (state) => state.auth
); // auth from store.js
const navigate = useNavigate();

useEffect(() => {
  if (isAuthenticated) {
    // console.log(isAuthenticated)
    alert.success("Registered user successfully!!")
    navigate("/");
  }

  if (error && !error.includes("jwt must be provided")) {
    alert.error(error);
    dispatch(clearErrors());
}
}, [dispatch, alert,  isAuthenticated, error, navigate]);

const submitHandler = (e) => {
  e.preventDefault();

  const formData = new FormData();

  formData.set("name", name);

  formData.set("email", email);

  formData.set("password", password);

  // formData.set("profile", profile);

  var object = {};

  formData.forEach((value, key) => (object[key] = value));

  var json = object;

  dispatch(register(json));
};

const onChange = (e) => {
  if (e.target.name === "profile") {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setprofilePreview(reader.result);
        setprofile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  } else {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
};

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="loginparent">
      <MetaData title={"Register User"} />
      
          <div className="login-page">
            <div className="formrm">
              <form className="login-form" onSubmit={submitHandler}>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
                <input
                  type="text"
                  placeholder="email address"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  name="password"
                  onChange={onChange}
                />
                {/* <div className="d-flex align-items-center profilecont">
                  <div>
                    <figure className="avatar mr-3 item-rtl">
                      <img
                        src={profilePreview}
                        className="rounded-circle"
                        alt="Avatar preview"
                      />
                    </figure>
                  </div>
                  <div className="custom-file">
                    <input
                      type="file"
                      name="profile"
                      className="custom-file-input"
                      id="customFile"
                      accept="images/*"
                      onChange={onChange}
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      Choose Avatar
                    </label>*/}
                  {/* </div> 
                </div> */}
                <button disabled ={loading ? true : false}>create</button>
                <p className="messagege">
                  Already registered? <Link to="/login">Sign In</Link> or{" "}
                  <Link to="/me/forgot/password">Forgot password?</Link>
                </p>
              </form>
              {/* <form className="login-form">
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <button>Register</button>
        <p className="messagege">Not registered? <Link to="#">Create an account</Link></p>
      </form> */}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Register;
