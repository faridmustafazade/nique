import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../Layouts/client/Footer";
import "./style.scss";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <div id="full-blog">
        <div className="blog">
          <div className="side-left">
            <div className="container">
              <div className="side-left-blog">
                <div className="logo">
                  <Link to="/">
                    <img
                      src="https://uploads-ssl.webflow.com/6321d0d284b5b7ca3857fad3/6321d4f35eab748617c65799_logo.svg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="name">
                  <h1
                    className="blog"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    blog
                  </h1>
                  <h1
                    className="news"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    latest news
                  </h1>
                </div>
              </div>
              <Footer />
            </div>
          </div>
          <div className="side-right">
            <div className="card" data-aos="fade-up" data-aos-duration="2000">
              <div className="card-image">
                <div className="img">
                  <img
                    src="https://assets.website-files.com/6321d0d284b5b793a257fad7/6325c19ac5878507a6d60379_post-gatsby-night-thumbnail-p-500.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-text">
                <p className="card-date">September 19, 2022</p>
                <h2 className="card-name">gatsby night</h2>
                <p className="card-about">
                  Massa tempor nec feugiat nisl pretium fusce id. Morbi
                  tincidunt ornare massa eget egestas purus.
                </p>
              </div>
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration="2000">
              <div className="card-image">
                <div className="img">
                  <img
                    src="https://assets.website-files.com/6321d0d284b5b793a257fad7/6325c1b605c1e329c3c02569_post-classic-dinner-night-thumbnail-p-500.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-text">
                <p className="card-date">September 19, 2022</p>
                <h2 className="card-name">classic dinner night</h2>
                <p className="card-about">
                  Massa tempor nec feugiat nisl pretium fusce id. Morbi
                  tincidunt ornare massa eget egestas purus.
                </p>
              </div>
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration="2000">
              <div className="card-image">
                <div className="img">
                  <img
                    src="https://assets.website-files.com/6321d0d284b5b793a257fad7/6325c1ca79ba58470e89030c_post-new-restaurant-thumbnail-p-500.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-text">
                <p className="card-date">September 19, 2022</p>
                <h2 className="card-name">new restaurant</h2>
                <p className="card-about">
                  Massa tempor nec feugiat nisl pretium fusce id. Morbi
                  tincidunt ornare massa eget egestas purus.
                </p>
              </div>
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration="2000">
              <div className="card-image">
                <div className="img">
                  <img
                    src="https://assets.website-files.com/6321d0d284b5b793a257fad7/6325c1dd1ee68f26ee5102bd_post-romantic-dinner-thumbnail-p-500.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-text">
                <p className="card-date">September 19, 2022</p>
                <h2 className="card-name">romantic dinner</h2>
                <p className="card-about">
                  Massa tempor nec feugiat nisl pretium fusce id. Morbi
                  tincidunt ornare massa eget egestas purus.
                </p>
              </div>
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration="2000">
              <div className="card-image">
                <div className="img">
                  <img
                    src="https://assets.website-files.com/6321d0d284b5b793a257fad7/6325c2f7acd3d8b38c5d8391_post-brand-new-kitchen-thumbnail-p-500.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-text">
                <p className="card-date">September 19, 2022</p>
                <h2 className="card-name">brand new kitchen</h2>
                <p className="card-about">
                  Massa tempor nec feugiat nisl pretium fusce id. Morbi
                  tincidunt ornare massa eget egestas purus.
                </p>
              </div>
            </div>
            <div className="shop-footer">
              <div className="nique">
                <img
                  src="https://assets.website-files.com/6321d0d284b5b7ca3857fad3/6321d4f35eab748617c65799_logo.svg"
                  alt=""
                />
                <div className="founder">
                  <p>
                    By <span>Farid Mustafazade</span>.
                  </p>
                  <p>
                    Powered by <span>Phiko</span>
                  </p>
                </div>
              </div>
              <div className="menu-pages">
                <h3 className="page-h3">Pages</h3>
                <ul>
                  <li>
                    <Link to="/menu">Menu</Link>
                  </li>
                  <li>
                    <Link to="/restaurant">Restaurant</Link>
                  </li>
                  <li>
                    <Link to="/classes">Classes</Link>
                  </li>
                  <li>
                    <Link to="/reservation">Book a Table</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                </ul>
              </div>
              <div className="menu-utility">
                <h3 className="uti-h3">Utility Pages</h3>
                <ul>
                  <li>
                    <Link>Styleguide</Link>
                  </li>
                  <li>
                    <Link>Licensing</Link>
                  </li>
                  <li>
                    <Link>Changelog</Link>
                  </li>
                  <li>
                    <Link>404 Page</Link>
                  </li>
                  <li>
                    <Link>Password Protected</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
