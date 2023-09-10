import "./login.css"
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layouts/Loader";
import MetaData from "../layouts/MetaData";
import { Link } from 'react-router-dom';
import { login, clearErrors}  from "../../actions/userActions"
import { useNavigate, useLocation } from "react-router-dom"
import {useAlert} from "react-alert"


const Login = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const alert = useAlert();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated, loading, error} = useSelector(state => state.auth); // auth from store.js
  const redirect = location.search ? location.search.split("=")[1] : "/"

  const navigate = useNavigate();
    useEffect(() => {

      if (isAuthenticated) {
        // console.log(isAuthenticated)
        // alert.success("Loggedin Successfully!!")

          navigate(redirect);
      }

      if (error && !error.includes("jwt must be provided")) {
          alert.error(error);
          dispatch(clearErrors());
      }

  }, [dispatch,  isAuthenticated, error, alert,   redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
}

  return (
    <Fragment>
       { loading ?  <Loader/> : (
          <div className='loginparent'>
                <MetaData title={'login'}/>
          <div className="login-page">
      <div className="formrm">
        <form className="login-form" onSubmit={submitHandler}>
          <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
          <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} required/>
          <button>login</button>
          <p className="messagege">Not registered? <Link to="/register">Create an account</Link> or <Link to="/me/forgot/password">Forgot Password?</Link></p>
        </form>
      </div>
    </div>
        </div>
       )}  

    </Fragment>
   
  )
}

export default Login