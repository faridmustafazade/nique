import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../Layouts/Footer";
import "./style.scss"
const Restaurant = () => {
  return (
    <>
      <div id="full-restaurant">
        <div className="container">
          <div className="restaurant">
            <div className="logo">
              <Link to="/">
                <img
                  src="https://uploads-ssl.webflow.com/6321d0d284b5b7ca3857fad3/6321d4f35eab748617c65799_logo.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="name">
              <h1 className="pure">Discover</h1>
              <h1 className="country">nique.</h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Restaurant;
