import React from 'react'
import aboutimg  from "../../assets/images/aboutus.jpg"
import MetaData from '../layouts/MetaData'

const Aboutus = () => {
  return (
    <div>
      <MetaData title="About Us"/>
       <section id="about-head" className="section-p1ab">
        <img src={aboutimg} alt=""/>
        <div>
            <h2 style={{marginBottom : "20px"}}>Crafting Excellence: Our Story in Fabrics</h2>
            <p style={{lineHeight : "22px"}}>At <strong>BECCA LUXURY EMPIRE</strong>, We are a group of passionate artisans who are dedicated to carefully selecting and delivering the best fabrics to people who have a keen eye for quality, including designers. Our journey began because we all share a deep love for textiles, a strong dedication to top-notch craftsmanship, and a vision to ignite creativity.

With our team's extensive experience in the textile industry, we have refined our expertise to ensure that every fabric we offer meets the highest standards in terms of quality and style. We take great pride in our commitment to sustainability and make sure we source our materials responsibly.

We're not just your ordinary fabric seller; we're a source of inspiration for those who want to turn their creative ideas into reality through the wonderful world of textiles.</p>
       
            <br/><br/>
         {/* <marquee loop="-1" scrollamount="5" >Discover a world of premium fabrics, where style meets quality. Elevate your projects with our exquisite collection. Shop now!</marquee> */}
         <div className="scrolling-text-container">
  <p className="scrolling-text">Discover a world of premium fabrics, where style meets quality. Elevate your projects with our exquisite collection. Shop now!</p>
</div>
        </div>
    </section>
    </div>
  )
}

export default Aboutus