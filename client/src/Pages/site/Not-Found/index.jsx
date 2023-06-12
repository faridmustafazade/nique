import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Footer from "../../../Layouts/Footer";

import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 - Not Found</title>
      </Helmet>
      <div id="full-not">
        <div className="container">
          <div className="not">
            <div className="logo">
              <Link to="/">
                <img
                  src="https://uploads-ssl.webflow.com/6321d0d284b5b7ca3857fad3/6321d4f35eab748617c65799_logo.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="name">
              <h1 className="pure">Page not found</h1>
              <h1 className="country">404</h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
