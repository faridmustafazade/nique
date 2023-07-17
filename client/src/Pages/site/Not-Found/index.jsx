import React, { useEffect } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";
import favicon from "../../../Assets/Images/favicon.jpg";

const NotFound = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <Helmet>
        <title>404 - Not Found</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
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
              <h1
                className="pure"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                Page not found
              </h1>
              <h1
                className="country"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                404
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
