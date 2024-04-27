import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../Layouts/client/Footer";
import "./style.scss";
import "aos/dist/aos.css";
import favicon from "../../../Assets/Images/favicon.jpg";
import { Helmet } from "react-helmet";

const Shop = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <Helmet>
        <title>Shop</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <div id="full-shop">
        <div className="shop">
          <div className="side-left">
            <div className="container">
              <div className="side-left-shop">
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
                    className="shop"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    shop
                  </h1>
                  <h1
                    className="give"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    Give a gift
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
                    src="https://assets.website-files.com/6321d0d284b5b793a257fad7/6325e05b19faa88edce28f77_product-gift-card-light-thumbnail-p-500.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-text">
                <p className="card-cost">$15.00 USD</p>
                <h2 className="card-name">gift card light</h2>
                <p className="card-about">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut
                  vitae neque sed sed sit sagittis tristique scelerisque.
                </p>
              </div>
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration="2000">
              <div className="card-image">
                <div className="img">
                  <img
                    src="https://assets.website-files.com/6321d0d284b5b793a257fad7/6325e0c0fed41fc9e8eba3d5_product-gift-card-standard-thumbnail-p-500.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-text">
                <p className="card-cost">
                  $30.00 USD <span className="cost-span">$20.00 USD</span>
                </p>
                <h2 className="card-name">gift card standart</h2>
                <p className="card-about">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut
                  vitae neque sed sed sit sagittis tristique scelerisque.
                </p>
              </div>
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration="2000">
              <div className="card-image">
                <div className="img">
                  <img
                    src="https://assets.website-files.com/6321d0d284b5b793a257fad7/6325e07e7e7563bf1db00af2_product-gift-card-premium-thumbnail-p-500.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-text">
                <p className="card-cost">$50.00 USD</p>
                <h2 className="card-name">gift card premium</h2>
                <p className="card-about">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut
                  vitae neque sed sed sit sagittis tristique scelerisque.
                </p>
              </div>
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration="2000">
              <div className="card-image">
                <div className="img">
                  <img
                    src="https://assets.website-files.com/6321d0d284b5b793a257fad7/6325e0913009595d2623f575_product-gift-card-gold-thumbnail-p-500.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-text">
                <p className="card-cost">$15.00 USD</p>
                <h2 className="card-name">gift card gold</h2>
                <p className="card-about">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut
                  vitae neque sed sed sit sagittis tristique scelerisque.
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

export default Shop;
