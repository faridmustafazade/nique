import React, { useEffect } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Footer from "../../../Layouts/client/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const Classes = () => {
  useEffect(() => {
    Aos.init({
    });
  }, []);
  return (
    <>
      <div class="outer-classes">
        <div class="classes">
          <div class="slide one">
            <div className="opacity"></div>
            <img
              src="https://assets.website-files.com/6321d0d284b5b793a257fad7/63237d010a2f18a51f76444b_class-delicious-breakfast-p-800.webp"
              alt=""
            />
            <div className="class-name">
              <h2
                className="pure"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                asian
              </h2>
              <h2
                className="country"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                delicius breakfast
              </h2>
              <p className="about-name">June 16, 2023</p>
            </div>
          </div>
          <div class="slide two">
            <div className="opacity"></div>
            <img
              src="https://assets.website-files.com/6321d0d284b5b793a257fad7/63238471370cee245fe5fb99_class-coffee-time-p-800.webp"
              alt=""
            />
            <div className="class-name">
              <h2
                className="pure"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                breakfast
              </h2>
              <h2
                className="country"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                coffee time
              </h2>
              <p className="about-name">March 17, 2023</p>
            </div>
          </div>
          <div class="slide three">
            <div className="opacity"></div>
            <img
              src="https://assets.website-files.com/6321d0d284b5b793a257fad7/63237f29e1807c751e2da944_class-vegan-burger-p-800.webp"
              alt=""
            />
            <div className="class-name">
              <h2
                className="pure"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                vegan
              </h2>
              <h2
                className="country"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                vegan burger
              </h2>
              <p className="about-name">January 10, 2023</p>
            </div>
          </div>
          <div class="slide four">
            <div className="opacity"></div>
            <img
              src="https://assets.website-files.com/6321d0d284b5b793a257fad7/632383cf8d1ac44c47e3f7d4_class-salad-style-p-800.webp"
              alt=""
            />
            <div className="class-name">
              <h2
                className="pure"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                italian
              </h2>
              <h2
                className="country"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                salad style
              </h2>
              <p className="about-name">November 19, 2023</p>
            </div>
          </div>
          <div class="slide five">
            <div className="opacity"></div>
            <img
              src="https://assets.website-files.com/6321d0d284b5b793a257fad7/632383d4a8b3a86dd91b541f_class-homemade-honey.webp"
              alt=""
            />
            <div className="class-name">
              <h2
                className="pure"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                italian
              </h2>
              <h2
                className="country"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                homemade honey
              </h2>
              <p className="about-name">June 16, 2023</p>
            </div>
          </div>
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
