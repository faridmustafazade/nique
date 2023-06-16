import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Footer from "../../../Layouts/client/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Menu = () => {
  const [data, setData] = useState([]);
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
      <div id="full-menu">
        <div className="menu">
          <div className="side-left">
            <div className="container">
              <div className="side-left-menu">
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
                    className="our-menu"
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
            <nav className="side-up">
              <ul>
                <li>
                  <a href="#starters">Starters</a>
                </li>
                <li>
                  <a href="#breakfast">Breakfast</a>
                </li>
                <li>
                  <a href="#lunch">Lunch</a>
                </li>
                <li>
                  <a href="#drinks">Drinks</a>
                </li>
              </ul>
            </nav>
            <div className="container">
              <div className="side-down">
                <div id="starters" data-aos="fade-up" data-aos-duration="2000">
                  <div className="up">Starters</div>
                  {data
                    .filter((item) =>
                      item.category.toLowerCase().includes("starters")
                    )
                    .map((d) => (
                      <div className="starters-menu">
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
                </div>
                <div id="breakfast" data-aos="fade-up" data-aos-duration="2000">
                  <div className="up">Breakfast</div>
                  {data
                    .filter((item) =>
                      item.category.toLowerCase().includes("breakfast")
                    )
                    .map((d) => (
                      <div className="starters-menu">
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
                </div>
                <div id="lunch" data-aos="fade-up" data-aos-duration="2000">
                  <div className="up">Lunch</div>
                  {data
                    .filter((item) =>
                      item.category.toLowerCase().includes("lunch")
                    )
                    .map((d) => (
                      <div className="starters-menu">
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
                </div>
                <div id="drinks" data-aos="fade-up" data-aos-duration="2000">
                  <div className="up">Drinks</div>
                  {data
                    .filter((item) =>
                      item.category.toLowerCase().includes("drinks")
                    )
                    .map((d) => (
                      <div className="starters-menu">
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
                        <Link>Book a Table</Link>
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

export default Menu;
