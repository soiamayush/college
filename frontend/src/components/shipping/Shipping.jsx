import { Link } from "react-router-dom";
import "./shipping.scss";
import { saveShippingInfo } from "../../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layouts/MetaData";
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { countries } from "countries-list";

const Shipping = () => {
  const countriesList = Object.values(countries);
  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [postalCode, setPostalCode] = useState(shippingInfo.postalCode);
  const [country, setCountry] = useState(shippingInfo.country);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(saveShippingInfo({ address, city, state,   phoneNo, postalCode, country }));
    navigate("/order/confirm");
  };

  return (
    <div className="parentship">
        <MetaData title={"Shipping Info"}/>
      <div className="contntainerz">
        <form className="shadow-lg" onSubmit={submitHandler}>
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
              <h1>Shiping Info</h1>
              <h2 className="h2class">Address</h2>
              <input
                type="text"
                className="pclass"
                required
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              ></input>
              <h2 className="h2class">City</h2>
              <input
                className="pclass"
                required
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              ></input>
              <h2 className="h2class">State</h2>
              <input
                className="pclass"
                required
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
              ></input>
              <h2 className="h2class">Phone Number</h2>
              <input
                className="pclass"
                required
                type="phone"
                id="phone_field"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              ></input>
              <h2 className="h2class">Postal code</h2>
              <input
                className="pclass"
                required
                type="number"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              ></input>
              <h2 className="h2class">Country</h2>
              <p className="">
                <select
                  id="country_field"
                  className="form-control"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                >
                  {countriesList.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </p>

              <button className="custom-btn btn-7" type="submit">
                <span>
                  {/* <Link style={{ textDecoration: "none", color: "black" }}> */}
                    Submit
                  {/* </Link>{" "} */}
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
