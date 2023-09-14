import React from 'react'
import MetaData from '../layouts/MetaData'

const Contact = () => {
  return (
<>
<MetaData title="Contact us" />

<section id="contact-details" className="section-p1ab">
        <div className="details">
            <span>GET IN TOUCH</span>
            <h2>Discover Fabrics Galore at Our Prime Location!</h2>
            <h3>Head Office</h3>
            <div>
                <li>
                    <i className="fa-solid fa-map"></i>
                    <p>Odessa, Texas, USA</p>
                </li>
                <li>
                    <i className="fa-solid fa-phone"></i>
                    <p>beccaempire23@yahoo.com</p>
                </li>
                <li>
                    <i className="fa-solid fa-clock"></i>
                    <p>Monday to Saturday: 9:00am to  7:00pm</p>
                </li>
            </div>
        </div>
        <div className="map">
            <iframe src="https://maps.google.com/maps?q=Odessa,%20Texas,%20USA&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>

    <section id="form-details">
    <form action="">
            <span>LEAVE A MESSAGE</span>
            <h2>We love to hear from you</h2>
            <input type="text" placeholder="Your Name"/>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Subject"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <button className="normal">Submit</button>
        </form>

        <div className='people'>
        <div>
                <img src="img/people/1.png" alt=""/>
                <p className='form-text'><span>John Doe </span>Senior Marketing Manager <br/> Phone: + 00 123 00 77 88 <br/> Email: contact@example.com</p>
                <div>
                <img src="img/people/2.png" alt=""/>
                <p className='form-text'><span>William Smith </span>Senior Marketing Manager <br/> Phone: + 00 123 00 77 88 <br/> Email: contact@example.com</p>
            </div>
            <div>
                <img src="img/people/3.png" alt=""/>
                <p className='form-text'><span>Emma Stone </span>Senior Marketing Manager <br/> Phone: + 00 123 00 77 88 <br/> Email: contact@example.com</p>
            </div>
            </div>
        </div>
    </section>
  
</>

  )
}

export default Contact