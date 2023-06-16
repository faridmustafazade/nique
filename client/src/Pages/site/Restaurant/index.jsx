import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../Layouts/client/Footer";
import "./style.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Restaurant = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <div class="outer-wrapper">
        <div class="wrapper">
          <div class="slide one"></div>
          <div class="slide two"></div>
          <div class="slide three"></div>
          <div class="slide four"></div>
          <div class="slide five"></div>
          <div class="slide six"></div>
          <div class="slide seven"></div>
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
