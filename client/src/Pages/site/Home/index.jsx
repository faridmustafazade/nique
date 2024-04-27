import React, { useEffect } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Footer from "../../../Layouts/client/Footer";
import { Helmet } from "react-helmet";  
import Aos from "aos";
import "aos/dist/aos.css";
import favicon from "../../../Assets/Images/favicon.jpg";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Home</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
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
              <h1 className="pure" data-aos="fade-down">
                The pure taste of
              </h1>
              <h1 className="country" data-aos="fade-up">
                Azerbaijan
              </h1>
              <p className="name-about" data-aos="fade-up">
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
