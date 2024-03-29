import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../Layouts/client/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import favicon from "../../../Assets/Images/favicon.jpg";
import { Helmet } from "react-helmet";

const Classes = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    const res = await axios.get("https://nique-mot9.vercel.app/api/classes");
    setData(res.data);
  };

  useEffect(() => {
    getData();
    Aos.init({});
  }, []);
  return (
    <>
    <Helmet>
        <title>Classes</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <div class="outer-classes">
        <div class="classes">
          {data.map((d) => (
            <div onClick={() => navigate(d._id)} class="slide one">
              <div className="opacity"></div>
              <img src={d.image} alt="" />
              <div className="class-name">
                <h2
                  className="pure"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  {d.type}
                </h2>
                <h2
                  className="country"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  {d.class}
                </h2>
                <p className="about-name">June 16, 2023</p>
              </div>
            </div>
          ))}
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
