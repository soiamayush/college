import React from "react";
import "./BlogCard.scss";
import { Link } from "react-router-dom";
import MetaData from "../layouts/MetaData";

const BlogCard = () => {
  return (
    <div>
      <MetaData title="Blogs" />
      <section id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src="img/blog/b1.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h3 style={{ marginBottom: "30px", fontSize: "xx-large" }}>
              Choosing the Perfect Fabric for Your Next DIY Project
            </h3>
            <p>
              Consider the project's purpose and your skill level. Beginners may
              find cotton or linen easier to work with, while experienced
              crafters might opt for silk or velvet for more intricate designs.
              Think about the drape, weight, and texture of the fabric in
              relation to your project's requirements. A flowing dress may
              require chiffon, while upholstery might demand durable canvas.
            </p>
          </div>
          <h1>10/09</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="img/blog/b2.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h3 style={{ marginBottom: "30px", fontSize: "xx-large" }}>
              The Art of Mixing and Matching Fabrics: Creating Unique Designs
            </h3>
            <p>
              Mixing and matching fabrics is a creative endeavor that can
              transform your fashion or interior design projects into unique
              works of art. Gone are the days of playing it safe with
              monochromatic or single-textured designs. The art of blending
              different fabrics not only adds depth and personality to your
              creations but also allows you to express your individual style.
            </p>
          </div>
          <h1>10/09</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="img/blog/b3.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h3 style={{ marginBottom: "30px", fontSize: "xx-large" }}>
              Tips for Caring and Maintaining Your Fabrics for the Long Haul
            </h3>
            <p>
              Caring for your fabrics is essential to ensure they stay fresh and
              beautiful for years to come. Here are some tips to help you
              maintain your textiles for the long haul. Read Labels: Always
              check care labels for washing and drying instructions. Different
              fabrics require different treatments. Sort Wisely: Separate your
              laundry by color and fabric type to prevent color bleeding and
              fabric damage. Use Cold Water: Washing in cold water is gentler on
              fabrics and helps retain color vibrancy. Gentle Cycle: Opt for a
              gentle cycle when possible to reduce wear and tear. Avoid
              Overloading: Overloading the washing machine can damage fabrics.
              Leave enough space for thorough cleaning.
            </p>
            {/* <Link to="/">CONTINUE READING</Link> */}
          </div>
          <h1>10/09</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="img/blog/b4.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h3 style={{ marginBottom: "30px", fontSize: "xx-large" }}>
              Exploring Sustainable Fabrics: Eco-Friendly Choices for Conscious
              Shoppers
            </h3>
            <p>
              {" "}
              Exploring sustainable fabrics is a meaningful step towards reducing the fashion industry's environmental impact. Fabrics like organic cotton, hemp, Tencel, and recycled polyester are gaining popularity for their low ecological footprint. These materials require less water, emit fewer greenhouse gases, and reduce waste compared to traditional fabrics.{" "}
            </p>
          </div>
          <h1>10/09</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="img/blog/b5.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h3 style={{ marginBottom: "30px", fontSize: "xx-large" }}>
              The Story Behind Our Fabrics: Quality, Sourcing, and Production
            </h3>
            <p>
              {" "}
              At the heart of every beautiful piece of clothing lies a remarkable story, one woven from threads of quality, sourcing, and production. Our commitment to delivering exceptional fabrics begins with a relentless pursuit of quality. We meticulously select materials, ensuring they meet the highest standards of durability, comfort, and sustainability.{" "}
            </p>
          </div>
          <h1>10/09</h1>
        </div>
      </section>
    </div>
  );
};

export default BlogCard;
