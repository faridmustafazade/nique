import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Footer from "../../../Layouts/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <div id="full-home">
        <div className="container">
          <div className="home">
            <div className="logo">
              <Link to="/">
                <img
                  src="https://uploads-ssl.webflow.com/6321d0d284b5b7ca3857fad3/6321d4f35eab748617c65799_logo.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="name">
              <h1 className="pure">The pure taste of</h1>
              <h1 className="country">Azerbaijan</h1>
              <p className="name-about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
