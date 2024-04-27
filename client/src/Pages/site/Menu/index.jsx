import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../Layouts/client/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addToWishlist, removeToWishlist } from "../../../Redux/Slice/Wishlist";
import { AiOutlineHeart } from "react-icons/ai";
import useToken from "../../../Hooks/useToken";
import { Helmet } from "react-helmet";
import favicon from "../../../Assets/Images/favicon.jpg";
import { FiShoppingCart } from "react-icons/fi";
import { addToCart } from "../../../Redux/Slice/cartSlice";
import { Base_Url } from "../../../api/Base_Url";

const Menu = () => {
  const [token] = useToken();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const [wishlistData, setWishlistData] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const getData = async () => {
    const res = await axios.get(`${Base_Url}/api/menu`);
    setData(res.data);
  };
  const getCategory = async () => {
    const res = await axios.get(`${Base_Url}/api/menu_category`);
    setCategory(res.data);
  };

  const handleAddToCart = (d) => {
    dispatch(addToCart(d));
    // navigate("/cart");
  };

  useEffect(() => {
    getData();
    getCategory();
    setWishlistData(JSON.parse(localStorage.getItem("wishlist")));

    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Menu</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
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
                {category.map((c) => (
                  <div
                    key={c._id}
                    className="starters"
                    id={c.category}
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="up">{c.category}</div>
                    {data
                      .filter((item) =>
                        item.category.toLowerCase().includes(c.category)
                      )
                      .splice(0, 3)
                      .map((d) => (
                        <div key={d._id} className="starters-menu">
                          <div className="eat">
                            <div className="eat-image">
                              <div className="image">
                                {wishlist.data.find(
                                  (elem) => elem._id === d._id
                                ) ? (
                                  <div
                                    className="heart"
                                    onClick={() =>
                                      dispatch(removeToWishlist(d._id))
                                    }
                                  >
                                    <img
                                      className="heart-img"
                                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png"
                                      alt=""
                                    />
                                  </div>
                                ) : (
                                  <div
                                    className="heart"
                                    style={{
                                      paddingLeft: "10px",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => {
                                      !token?.token
                                        ? navigate("/sign-in")
                                        : dispatch(addToWishlist(d));
                                    }}
                                  >
                                    <AiOutlineHeart className="heart-img" />
                                  </div>
                                )}
                                <img src={d.image} alt="" />
                              </div>
                            </div>
                            <div className="texts">
                              <div className="cost">
                                <h3 className="food-name">{d.name}</h3>
                                <p className="amount">$ {d.price}</p>
                                <button
                                  className="addto"
                                  onClick={() => handleAddToCart(d)}
                                >
                                  Add to Cart
                                </button>
                                <FiShoppingCart
                                  className="shop"
                                  onClick={() => handleAddToCart(d)}
                                />
                              </div>
                              <p className="food-about">{d.about}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    <div className="button">
                      <button
                        className="more"
                        onClick={() => navigate(c.category)}
                      >
                        More
                      </button>
                    </div>
                  </div>
                ))}
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

export default Menu;
