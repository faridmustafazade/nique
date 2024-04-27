import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../../../Layouts/client/Footer";
import { removeAll, removeToWishlist } from "../../../Redux/Slice/Wishlist";
import "./style.scss";
import favicon from "../../../Assets/Images/favicon.jpg";
import { Helmet } from "react-helmet";
const WishListPage = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  return (
    <>
      <Helmet>
        <title>Favorites</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <div id="full-wish">
        <div className="wish">
          <div className="side-left">
            <div className="container">
              <div className="side-left-wish">
                <div className="logo">
                  <Link to="/">
                    <img
                      src="https://uploads-ssl.webflow.com/6321d0d284b5b7ca3857fad3/6321d4f35eab748617c65799_logo.svg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="name">
                  <h1 className="our-menu">Favorites</h1>
                </div>
              </div>
              <Footer />
            </div>
          </div>
          <div className="side-right">
            <div className="container">
              <div className="side-down">
                {wishlist?.data.find((elem) => elem._id) ? (
                  wishlist.data?.map((element) => (
                    <div key={element._id} className="starters-menu">
                      <div className="eat">
                        <div className="eat-image">
                          <div className="image">
                            <img src={element.image} alt="" />
                          </div>
                        </div>
                        <div className="texts">
                          <div className="cost">
                            <h3 className="food-name">{element.name}</h3>
                            <p className="amount">$ {element.price}</p>
                            <div className="buttons">
                              <button
                                className="deleting"
                                onClick={() =>
                                  dispatch(removeToWishlist(element._id))
                                }
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                          <p className="food-about">{element.about}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <h3
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontFamily: "chillax",
                      fontSize: "2rem",
                      paddingTop: "200px",
                      paddingBottom: "200px",
                    }}
                  >
                    Empty 
                  </h3>
                )}
                {wishlist?.data.find((elem) => elem._id) && (
                  <button
                    className="deleting-all"
                    onClick={() => dispatch(removeAll([]))}
                  >
                    Delete All
                  </button>
                )}

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

export default WishListPage;
