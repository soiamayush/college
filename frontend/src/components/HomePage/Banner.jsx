import React from 'react'
import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <section id="banner" className="section-m1">
    <h4>Unveil Unbelievable Deals on Luxurious Fabrics!</h4>
    <h2>Up to<span> 20% Off</span> - All fabrics & Accessories</h2>
    <button className="normal"><Link to="/shop" style={{textDecoration : "none", color : "black"}}>Explore</Link></button>
</section>

  )
}

export default Banner