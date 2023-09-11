import React, { Fragment } from 'react'
import "./orderconfirm.scss"
import {Link, useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux';
import MetaData from '../layouts/MetaData';


const OrderConfirm = () => {
  const { cartItems, shippingInfo } = useSelector(state => state.cart);
  const { user } = useSelector(state => state.auth)
  const navigate = useNavigate();

  //calculate order prices
  const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingPrice = itemsPrice > 200 ? 0 : 25;
  const taxPrice = Number((0.05 * itemsPrice).toFixed(2));
  const totalPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2);


  const proccessToPayment = () => {

        
    //    const random6DigitNumber = generateRandom6DigitNumber();
    //    console.log(random6DigitNumber);
    //    alert(`otp has been sent to your phone. your otp is ${random6DigitNumber}`);
    
    //    var userInput = prompt("Please enter your otp:");
    //    if(userInput == random6DigitNumber){
    //     alert("otp verified successfully!!");
    //    }else{
    //     alert("otp doesn't match");
    //    }



    const data = {
         itemsPrice : itemsPrice.toFixed(2),
         shippingPrice,
         taxPrice,
        totalPrice
    }

    sessionStorage.setItem("orderInfo", JSON.stringify(data))  //session storage is deleted when you close chrome
    navigate("/payment")
    
}

  return (
    <div className='parentship'>
        <MetaData title={"Confirm order"}/>

    <div className="contntainerz contntaineroc">
<div id="logogo"><h1 className="h1class logogo">BECCA</h1>
<div className="CTA">
  <h1 className="h1class">BECCA</h1>
  </div>
</div>
<div className="leftbox">
<nav className='sidebarr'>
  <Link id="profilele" className=""><i className="fa fa-user"></i></Link>
  <Link id="payment"><i className="fa fa-credit-card"></i></Link>
  <Link id="subscription"><i className="fa fa-tv"></i></Link>
  <Link id="privacy"><i className="fa fa-tasks"></i></Link>
  <Link id="settings"><i className="fa fa-cog"></i></Link>
</nav>
</div>
<div className="rightboxz">


<div className="settings ">
  <h1 className="">Shipping info</h1>
  <h2 className="h2class">Name : {user && user.name}</h2>
  <h2 className="h2class">Phone  : {shippingInfo.phoneNo}</h2>
  <h2 className="h2class">Address : {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.state}, {shippingInfo.country}, {shippingInfo.postalCode}</h2>
  <h2 className="h2class">Your cart Items : </h2>
  {cartItems.map((item, index) => (
    <Fragment >
      <span className='cartItemcont' key={item.product}>
      <p className="ptag"><Link to={`/products/${item.product}`} style={{textDecoration : "none", color : "black", marginBottom : "5px", display : "block"}}>{item.name}</Link></p>
      <p className='ptag'>{item.quantity} x ${item.price} = <b>${(item.quantity * item.price).toFixed(2)}</b></p>
      </span>
    </Fragment>
  ))}
  <h2 className="h2class ">Order summary </h2>
  <span className='ordersum'>
                        <p>Subtotal:  <span className="order-summary-values" >${itemsPrice}</span></p>
                        <p>Shipping: <span className="order-summary-values">${shippingPrice}</span></p>
                        <p>Tax:  <span className="order-summary-values">${taxPrice}</span></p>


                        <p>Total: <span className="order-summary-values">${totalPrice}</span></p>

  </span>
  


<button className="custom-btn btn-7" type="submit" onClick={proccessToPayment}><span><Link style={{textDecoration : "none", color : "black"}}>Proceed to payment</Link> </span></button>
</div>

</div>
</div>
</div>
  )
}

export default OrderConfirm