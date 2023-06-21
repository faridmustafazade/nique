import { Input } from "antd";
import Aos from "aos";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../Layouts/client/Footer";
import "./style.scss";
import "aos/dist/aos.css";
import favicon from "../../../Assets/Images/favicon.jpg";
import { Helmet } from "react-helmet";

const Reservation = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <Helmet>
        <title>Reservation</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <div id="full-reservation">
        <div className="reservation">
          <div className="side-left">
            <div className="container">
              <div className="side-left-reservation">
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
                    className="book"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    Book a table
                  </h1>
                  <h1
                    className="reservation"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    reservation
                  </h1>
                </div>
              </div>
              <Footer />
            </div>
          </div>
          <div className="side-right">
            <h2 className="book-h2">Book a table</h2>
            <p className="right-about">
              Volutpat maecenas volutpat blandit aliquam etiam erat velit
              scelerisque. Arcu non odio euismod lacinia. Tortor aliquam nulla
              facilisi cras fermentum odio eu.
            </p>
            <div className="container">
              <div className="side-down">
                <div className="form">
                  <label className="label">Name</label>
                  <Input className="input" placeholder="Enter your name" />
                </div>
                <div className="form">
                  <label className="label">Number of Guests</label>
                  <Input className="input" type="number" placeholder="2" />
                </div>
                <div className="date-form">
                  <div className="form dates">
                    <label className="label">Date</label>
                    <Input className="input date" placeholder="01.05.2003" />
                  </div>
                  <div className="form times">
                    <label className="label">Time</label>
                    <Input className="input time" placeholder="6pm" />
                  </div>
                </div>
                <button className="send">book a table</button>
                <div className="reservation-footer">
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
        </div>
      </div>
    </>
  );
};

export default Reservation;
