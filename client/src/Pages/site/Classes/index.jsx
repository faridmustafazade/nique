import React from "react";
import "./style.scss"
import { Link } from "react-router-dom";
import Footer from "../../../Layouts/Footer";

const Classes = () => {
  return (
    <>
      <div class="outer-wrapper">
        <div class="wrapper">
          <div class="slide one"></div>
          <div class="slide two"></div>
          <div class="slide three"></div>
          <div class="slide four"></div>
          <div class="slide five"></div>
          
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
      </div>
      <Footer /> 
    </>
  );
};

export default Classes;
