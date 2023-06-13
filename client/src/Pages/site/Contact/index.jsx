import { Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../Layouts/Footer";
import "./style.scss";
const Contact = () => {
  return (
    <>
      <div id="full-contact">
        <div className="contact">
          <div className="side-left">
            <div className="container">
              <div className="side-left-contact">
                <div className="logo">
                  <Link to="/">
                    <img
                      src="https://uploads-ssl.webflow.com/6321d0d284b5b7ca3857fad3/6321d4f35eab748617c65799_logo.svg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="name">
                  <h1 className="contact">contact</h1>
                  <h1 className="get">Get in Touch</h1>
                </div>
              </div>
              <Footer />
            </div>
          </div>
          <div className="side-right">
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
                  <label className="label">Email</label>
                  <Input className="input" placeholder="Your email address" />
                </div>
                <div className="form">
                  <label className="label">Message</label>
                  <Input className="input email" placeholder="Your message" />
                </div>
                <button className="send">send message</button>
                <div className="contact-footer">
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
                        <Link>Classes</Link>
                      </li>
                      <li>
                        <Link>Book a Table</Link>
                      </li>
                      <li>
                        <Link>Contact</Link>
                      </li>
                      <li>
                        <Link>Blog</Link>
                      </li>
                      <li>
                        <Link>Shops</Link>
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

export default Contact;
