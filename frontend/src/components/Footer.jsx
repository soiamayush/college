import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Button } from './HomePage/Button';

function Footer() {  
  return (
       <>
        <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <h1 className='footer-subscription-heading'> 
         We'd &hearts; to help !!
        </h1>

        <p className='footer-subscription-heading'> 
            We like to create things with fun.
             feel free to E-mail us
        </p>

        
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Send</Button>
          </form>
        </div>
      </section> */}
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/maintenance'>How it works</Link>
            <Link to='/maintenance'>Investors</Link>
            <Link to='/maintenance'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/maintenance'>Contact</Link>
            <Link to='/maintenance'>Support</Link>
            <Link to='/maintenance'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/maintenance'>Instagram</Link>
            <Link to='/maintenance'>Facebook</Link>
            <Link to='/maintenance'>LinkedIn</Link>
            <Link to='/maintenance'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/maintenance' className='social-logo'>
             Becca Luxury Empire
            {/* <i className='fas fa-laptop-code' style={{marginLeft : "20px"}} ></i> */}
            </Link>
          </div>
          <small className='website-rights'>Copyright © 2023-24 | All rights Reserved</small>
          
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/maintenance'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/maintenance'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/maintenance'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/maintenance'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/maintenance'
              target='_blank'
              aria-label='LinkedIn'
            >              
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
       </>
  );
}

export default Footer;
