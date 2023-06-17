import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Footer from "../../../../Layouts/client/Footer";

const MenuDetails = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    const res = await axios.get("http://localhost:2003/api/menu");
    setData(res.data);
  };

  useEffect(() => {
    getData();
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div id="full-menud">
        <div className="menud">
          <div className="side-left">
            <div className="container">
              <div className="side-left-menud">
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
                    Check out
                  </h1>
                  <h1
                    className="our-menud"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    Our Menu
                  </h1>
                </div>
              </div>
              <Footer />
            </div>
          </div>
          <div className="side-right">
            <div className="container">
              <div className="side-down">
                <div id="starters" data-aos="fade-up" data-aos-duration="2000">
                  <div className="up">{params.category}</div>
                  {data
                    .filter((item) =>
                      item.category.toLowerCase().includes(params.category)
                    )
                    .map((d) => (
                      <div className="starters-menud">
                        <div className="eat">
                          <div className="eat-image">
                            <div className="image">
                              <img src={d.image} alt="" />
                            </div>
                          </div>
                          <div className="texts">
                            <div className="cost">
                              <h3 className="food-name">{d.name}</h3>
                              <p className="amount">$ {d.price}</p>
                            </div>
                            <p className="food-about">{d.about}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  <div className="button">
                    <button className="more" onClick={() => navigate("/menu")}>
                      Go Back
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

export default MenuDetails;
