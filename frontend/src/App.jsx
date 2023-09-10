import './App.css'
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom"
import Footer from './components/Footer'
import BlogCard from './components/BlogPage/BlogCard'
import Cartpage from './components/CartPage/Cartpage'
import Shop from './components/ShopPage/Shop'
import ProductDetails from './components/Productpage/ProductDetails'
import Contact from './components/Contact.page/Contact'
import Aboutus from './components/AboutusPage/Aboutus'
import Login from './components/User/Login'
import Register from './components/User/Register'
import Shipping from './components/shipping/Shipping'
import OrderConfirm from './components/shipping/OrderConfirm'
import Payment from './components/shipping/Payment'
import Ordersuccess from './components/shipping/Ordersuccess'
import User from './components/User/User'
import { loadUser } from './actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import store from "./store"
import ProtectedRoute from './components/route/ProtectedRoute'
import Updateprofile from './components/User/Updateprofile'
import Changepassword from './components/User/Changepassword'
import Forgotpassword from './components/User/Forgotpassword'
import Newpassword from './components/User/Newpassword'
import Myorder from './components/order/Myorder'


// import { Elements } from "@stripe/react-"
// import { loadStripe } from '@stripe/stripe-js';
import Dashboard from './components/Admin/Dashboard'
import Maintenance from './components/layouts/Maintenance'


function App() {

  
  const [stripeApiKey, setStripeApiKey] = useState("")
  const {user ,  loading, isAuthenticated } = useSelector(state => state.auth)

  useEffect(() => {
      store.dispatch(loadUser());
  }, [])

  return (
    <>
      <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/blog" element={<BlogCard/>} exact/>
          <Route path="/Shop" element={<Shop/>} exact/>
          <Route path="/product/:id" element={<ProductDetails/>} exact/>
          <Route path="/cart" element={<Cartpage/>} exact/>
          <Route path="/contact" element={<Contact/>} exact/>
          <Route path="/about" element={<Aboutus/>} exact/>
          <Route path="/login" element={<Login/>} exact/>
          <Route path="/register" element={<Register/>} exact/>
          <Route path="/shipping" element={<ProtectedRoute ><Shipping/></ProtectedRoute>} exact/>
          <Route path="/order/confirm" element={<ProtectedRoute ><OrderConfirm/></ProtectedRoute>} exact/>
          <Route path="/order/me" element={<ProtectedRoute ><Myorder/></ProtectedRoute>} exact/>
          <Route path="/success" element={<ProtectedRoute ><Ordersuccess/></ProtectedRoute>} exact/>
          <Route path="/me/update" element={<ProtectedRoute ><Updateprofile/></ProtectedRoute>} exact/>
          <Route path="/me/order" element={<ProtectedRoute ><Myorder/></ProtectedRoute>} exact/>
          <Route path="/me/update/password" element={<ProtectedRoute ><Changepassword/></ProtectedRoute>} exact/>
          <Route path="/me/forgot/password" element={<ProtectedRoute ><Forgotpassword/></ProtectedRoute>} exact/>
          <Route path="/me/password/reset/:id" element={<ProtectedRoute ><Newpassword/></ProtectedRoute>} exact/>
          <Route path="/me" element={<ProtectedRoute ><User/></ProtectedRoute>} exact/>
          <Route path="/dashboard" element={<Dashboard/>} exact/>
          <Route path="/maintenance" element={<Maintenance/>} exact/>
 
            <Route path="/payment" 
            element={
              <ProtectedRoute>
              <Payment/>
              </ProtectedRoute>
            } 
            exact
            />

        </Routes>
        <Footer/>
        </div>
      </Router>
    </>
  )
}

export default App
