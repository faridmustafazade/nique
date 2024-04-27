import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Footer from "../../../../Layouts/client/Footer";
import favicon from "../../../../Assets/Images/favicon.jpg";
import { Helmet } from "react-helmet";
import { Base_Url } from "../../../../api/Base_Url";

const ClassesDetails = () => {
  const [data, setData] = useState({});
  const [menu, setMenu] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const getData = async () => {
    const res = await axios.get(`${Base_Url}/api/classes/${params.id}`);

    setData(res.data);
  };
  const getMenu = async () => {
    const res = await axios.get(`${Base_Url}/api/menu`);
    setMenu(res.data);
  };
  useEffect(() => {
    getData();
    getMenu();
    Aos.init({
      duration: 1000,
    });
  });
  return (
    <>
      <Helmet>
        <title>Class</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <div id="full-classd">
        <div className="classd">
          <div className="side-left">
            <div className="container">
              <div className="side-left-classd">
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
                    className="check"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    {data.type}
                  </h1>
                  <h1
                    className="our-menud"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    {data.class}
                  </h1>
                </div>
              </div>
              <Footer />
            </div>
          </div>
          <div className="side-right">
            <div className="container">
              <div className="side-down">
                <div id="starters">
                  <p
                    className="cook"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    cooking class
                  </p>
                  <h2
                    className="reservs"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    Reserve your spot
                  </h2>
                  <p
                    className="about"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    {data.about}
                  </p>
                  <div
                    className="buy"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <button>book a spot</button>
                    <h4 className="cost">${data.price}</h4>
                  </div>
                  <h2
                    className="menu"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    menu
                  </h2>
                  <div
                    className="menus"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    {menu
                      .filter((item) => item.class.includes(data.class))
                      .map((m) => (
                        <div key={m._id} className="eat">
                          <div className="eat-image">
                            <div className="image">
                              <img src={m.image} alt="" />
                            </div>
                          </div>
                          <div className="texts">
                            <h3 className="food-name">{m.name}</h3>
                            <p className="food-about">{m.about}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                  <h2
                    className="chef"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    chef
                  </h2>
                  <div
                    className="chef-about"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <img src={data.chefImage} alt="" />
                    <div className="texts">
                      <h3 className="chef-name">{data.chefName}</h3>
                      <p className="chef-about">{data.chefAbout}</p>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="button"
                  >
                    <button
                      className="back"
                      onClick={() => navigate("/classes")}
                    >
                      Go back
                    </button>
                  </div>
                </div>

                <div className="menu-footer">
                  <div className="nique">
                    <img
                      src="https://assets.website-files.com/6321d0d284b5b7ca3857fad3/6321d4f35eab748617c65799_logo.svg"
                      alt=""
                    />
                    <div className="founder">
                      <p>
                        By <span>Farid Mustafazade</span>.
                      </p>
                      <p>
                        Powered by <span>Phiko</span>
                      </p>
                    </div>
                  </div>
                  <div className="menu-pages">
                    <h3 className="page-h3">Pages</h3>
                    <ul>
                      <li>
                        <Link to="/menu">Menu</Link>
                      </li>
                      <li>
                        <Link to="/restaurant">Restaurant</Link>
                      </li>
                      <li>
                        <Link to="/classes">Classes</Link>
                      </li>
                      <li>
                        <Link to="/reservation">Book a Table</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/shop">Shop</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="menu-utility">
                    <h3 className="uti-h3">Utility Pages</h3>
                    <ul>
                      <li>
                        <Link>Styleguide</Link>
                      </li>
                      <li>
                        <Link>Licensing</Link>
                      </li>
                      <li>
                        <Link>Changelog</Link>
                      </li>
                      <li>
                        <Link>404 Page</Link>
                      </li>
                      <li>
                        <Link>Password Protected</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassesDetails;
