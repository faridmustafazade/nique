import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../Layouts/client/Footer";
import "./style.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import favicon from "../../../Assets/Images/favicon.jpg";
import { Helmet } from "react-helmet";
const Restaurant = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Restaurant</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <div className="outer-wrapper">
        <div className="wrapper">
          <div className="slide one"></div>
          <div className="slide two"></div>
          <div className="slide three"></div>
          <div className="slide four"></div>
          <div className="slide five"></div>
          <div className="slide six"></div>
          <div className="slide seven"></div>
        </div>
      </div>
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
          <h1 className="pure" data-aos="fade-down">
            Discover
          </h1>
          <h1 className="country" data-aos="fade-up">
            nique.
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Restaurant;
