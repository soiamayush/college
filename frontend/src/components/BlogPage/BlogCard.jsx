import React from 'react'
import "./BlogCard.scss"
import { Link } from "react-router-dom"
import MetaData from '../layouts/MetaData'

const BlogCard = () => {
  return (
    <div>
            <MetaData title="Blogs" />
    <section id="blog">
        <div className="blog-box">
            <div className="blog-img">
                <img src="img/blog/b1.jpg" alt=""/>
            </div>
            <div className="blog-details">
                <h3 style={{marginBottom : "30px", fontSize : "xx-large"}}>Choosing the Perfect Fabric for Your Next DIY Project</h3>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate corporis velit tempore placeat ipsa ratione, reiciendis, est quae, nesciunt in aliquam accusantium natus! Vero dicta perspiciatis possimus esse illo? </p>
 
        
            </div>
            <h1>10/09</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src="img/blog/b2.jpg" alt=""/>
            </div>
            <div className="blog-details">
                <h3 style={{marginBottom : "30px", fontSize : "xx-large"}}>The Art of Mixing and Matching Fabrics: Creating Unique Designs</h3>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate corporis velit tempore placeat ipsa ratione, reiciendis, est quae, nesciunt in aliquam accusantium natus! Vero dicta perspiciatis possimus esse illo? </p>

        
            </div>
            <h1>10/09</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src="img/blog/b3.jpg" alt=""/>
            </div>
            <div className="blog-details">
                <h3 style={{marginBottom : "30px", fontSize : "xx-large"}}>Tips for Caring and Maintaining Your Fabrics for the Long Haul</h3>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate corporis velit tempore placeat ipsa ratione, reiciendis, est quae, nesciunt in aliquam accusantium natus! Vero dicta perspiciatis possimus esse illo? </p>
                {/* <Link to="/">CONTINUE READING</Link> */}
        
            </div>
            <h1>10/09</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src="img/blog/b4.jpg" alt=""/>
            </div>
            <div className="blog-details">
                <h3 style={{marginBottom : "30px", fontSize : "xx-large"}}>Exploring Sustainable Fabrics: Eco-Friendly Choices for Conscious Shoppers</h3>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate corporis velit tempore placeat ipsa ratione, reiciendis, est quae, nesciunt in aliquam accusantium natus! Vero dicta perspiciatis possimus esse illo? </p>
                <Link to="/">CONTINUE READING</Link>
        
            </div>
            <h1>10/09</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src="img/blog/b5.jpg" alt=""/>
            </div>
            <div className="blog-details">
                <h3 style={{marginBottom : "30px", fontSize : "xx-large"}}>The Story Behind Our Fabrics: Quality, Sourcing, and Production</h3>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate corporis velit tempore placeat ipsa ratione, reiciendis, est quae, nesciunt in aliquam accusantium natus! Vero dicta perspiciatis possimus esse illo? </p>
                <Link to="/">CONTINUE READING</Link>
        
            </div>
            <h1>10/09</h1>
        </div>
    </section>
    </div>
  )
}

export default BlogCard