import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Footer from "../../../Layouts/Footer";

const Menu = () => {
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
                  <h1 className="check">Check out</h1>
                  <h1 className="our-menu">Our Menu</h1>
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
                <div id="starters">
                  <div className="up">Starters</div>
                  <div className="starters-menu">
                    <div className="eat">
                      <div className="eat-image">
                        <div className="image">
                          <img
                            src="https://assets.website-files.com/6321d0d284b5b7ca3857fad3/6324bdfe0ebb94925875d95f_menu-tomato-toast.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="texts">
                        <div className="cost">
                          <h3 className="food-name">Tomato Soup</h3>
                          <p className="amount">$ 4.90</p>
                        </div>
                        <p className="food-about">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                      </div>
                    </div>
                    <div className="eat">
                      <div className="eat-image">
                        <div className="image">
                          <img
                            src="https://assets.website-files.com/6321d0d284b5b7ca3857fad3/6324bdfe3f4c8b7cc88b25f7_menu-noodle-soup.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="texts">
                        <div className="cost">
                          <h3 className="food-name">Noodle Soup</h3>
                          <p className="amount">$ 5.50</p>
                        </div>
                        <p className="food-about">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                      </div>
                    </div>
                    <div className="eat">
                      <div className="eat-image">
                        <div className="image">
                          <img
                            src="https://assets.website-files.com/6321d0d284b5b7ca3857fad3/6324bdfeaccfb04b0713ee16_menu-pumpkin-soup.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="texts">
                        <div className="cost">
                          <h3 className="food-name">Pumpkin Soup</h3>
                          <p className="amount">
                            <span
                              style={{
                                textDecoration: "line-through",
                                color: "rgba(255, 255, 255, 0.6)",
                              }}
                            >
                              $ 4.90
                            </span>{" "}
                            $ 6.90
                          </p>
                        </div>
                        <p className="food-about">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="breakfast">
                  <div className="up">Breakfast</div>
                  <div className="starters-menu">
                    <div className="eat">
                      <div className="eat-image">
                        <div className="image">
                          <img
                            src="https://assets.website-files.com/6321d0d284b5b7ca3857fad3/6324bdfd807e7a0ec31c4cb3_menu-delicious-pancakes.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="texts">
                        <div className="cost">
                          <h3 className="food-name">Delicious Pancakes</h3>
                          <p className="amount">$ 8.90</p>
                        </div>
                        <p className="food-about">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                      </div>
                    </div>
                    <div className="eat">
                      <div className="eat-image">
                        <div className="image">
                          <img
                            src="https://assets.website-files.com/6321d0d284b5b7ca3857fad3/6324bdfeb74070b437ee104c_menu-sweet-heaven.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="texts">
                        <div className="cost">
                          <h3 className="food-name">Sweet Heaven</h3>
                          <p className="amount">$ 9.90</p>
                        </div>
                        <p className="food-about">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                      </div>
                    </div>
                    <div className="eat">
                      <div className="eat-image">
                        <div className="image">
                          <img
                            src="https://assets.website-files.com/6321d0d284b5b7ca3857fad3/6324bdfef9793b2e8b0c0d57_menu-oatmeak-spirit.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="texts">
                        <div className="cost">
                          <h3 className="food-name">Oatmeal Spirit</h3>
                          <p className="amount">$ 9.90</p>
                        </div>
                        <p className="food-about">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                      </div>
                    </div>
                    <div className="eat">
                      <div className="eat-image">
                        <div className="image">
                          <img
                            src="https://assets.website-files.com/6321d0d284b5b7ca3857fad3/6324bdfd49201e59aa71d9ed_menu-avocado-smash.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="texts">
                        <div className="cost">
                          <h3 className="food-name">Avocado Smash</h3>
                          <p className="amount">$ 7.90</p>
                        </div>
                        <p className="food-about">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="lunch">
                  <div className="up">Lunch</div>
                  <div className="starters-menu">
                    <div className="eat">
                      <div className="eat-image">
                        <div className="image">
                          <img
                            src="https://assets.website-files.com/6321d0d284b5b7ca3857fad3/6324bdfe6028d9e2fcf33a00_menu-italian-pizza.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="texts">
                        <div className="cost">
                          <h3 className="food-name">Italian Pizza</h3>
                          <p className="amount">$ 12.90</p>
                        </div>
                        <p className="food-about">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                      </div>
                    </div>
                    <div className="eat">
                      <div className="eat-image">
                        <div className="image">
                          <img
                            src="https://assets.website-files.com/6321d0d284b5b7ca3857fad3/6324ce1f2d7ac5ff9103be98_menu-vegan-burger.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="texts">
                        <div className="cost">
                          <h3 className="food-name">Vegan Burger</h3>
                          <p className="amount">$ 13.90</p>
                        </div>
                        <p className="food-about">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                      </div>
                    </div>
                    <div className="eat">
                      <div className="eat-image">
                        <div className="image">
                          <img
                            src="https://assets.website-files.com/6321d0d284b5b7ca3857fad3/6324bdfe2e736192104b3b38_menu-sea-curry.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="texts">
                        <div className="cost">
                          <h3 className="food-name">Sea Curry</h3>
                          <p className="amount">
                            <span
                              style={{
                                textDecoration: "line-through",
                                color: "rgba(255, 255, 255, 0.6)",
                              }}
                            >
                              $ 14.90
                            </span>{" "}
                            $ 9.90
                          </p>
                        </div>
                        <p className="food-about">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                      </div>
                    </div>
                    <div className="eat">
                      <div className="eat-image">
                        <div className="image">
                          <img
                            src="https://assets.website-files.com/6321d0d284b5b7ca3857fad3/6324bdfd2e73617d074b3b33_menu-noodle-bowl.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="texts">
                        <div className="cost">
                          <h3 className="food-name">Noodle Bowl</h3>
                          <p className="amount">$ 9.90</p>
                        </div>
                        <p className="food-about">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="drinks">
                  <div className="up">Drinks</div>
                  <div className="starters-menu">
                    <div className="eat">
                      <div className="eat-image">
                        <div className="image">
                          <img
                            src="https://assets.website-files.com/6321d0d284b5b7ca3857fad3/6324bdfde5861b2d12ae2db0_menu-penthouse-tonic.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="texts">
                        <div className="cost">
                          <h3 className="food-name">Panthouse Tonic</h3>
                          <p className="amount">$ 10.90</p>
                        </div>
                        <p className="food-about">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                      </div>
                    </div>
                    <div className="eat">
                      <div className="eat-image">
                        <div className="image">
                          <img
                            src="https://assets.website-files.com/6321d0d284b5b7ca3857fad3/6324bdfdaba5197f1fb6f7ec_menu-apple-breeze.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="texts">
                        <div className="cost">
                          <h3 className="food-name">Apple Breeze</h3>
                          <p className="amount">$ 13.90</p>
                        </div>
                        <p className="food-about">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                      </div>
                    </div>
                    <div className="eat">
                      <div className="eat-image">
                        <div className="image">
                          <img
                            src="https://assets.website-files.com/6321d0d284b5b7ca3857fad3/6324bdfeeaaecd642994bb12_menu-frenchman-blitz.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="texts">
                        <div className="cost">
                          <h3 className="food-name">Frenchman Blitz</h3>
                          <p className="amount">$ 8.90</p>
                        </div>
                        <p className="food-about">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                      </div>
                    </div>
                    <div className="eat">
                      <div className="eat-image">
                        <div className="image">
                          <img
                            src="https://assets.website-files.com/6321d0d284b5b7ca3857fad3/6324bdfd2e73617d074b3b33_menu-noodle-bowl.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="texts">
                        <div className="cost">
                          <h3 className="food-name">Noodle Bowl</h3>
                          <p className="amount">$ 9.90</p>
                        </div>
                        <p className="food-about">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                      </div>
                    </div>
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
