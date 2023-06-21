import React from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../Hooks/useToken";
import axios from "axios";
import favicon from "../../Assets/Images/favicon.jpg";
import { Helmet } from "react-helmet";
const UserProfile = () => {
  const [token] = useToken();
  const navigate = useNavigate();
  const deletingMenu = async (id) => {
    await axios.delete(`http://localhost:2003/api/${id}`);
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <Helmet>
        <title>User-Profile</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <div id="full-user">
        <div className="user">
          <div className="side-left">
            <div className="container">
              <div className="side-left-user">
                <div className="logo">
                  <Link to="/">
                    <img
                      src="https://uploads-ssl.webflow.com/6321d0d284b5b7ca3857fad3/6321d4f35eab748617c65799_logo.svg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="name">
                  {token?.user && (
                    <h1 className="our-menud">
                      {token?.user?.firstName} {token?.user?.lastName}
                    </h1>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="side-right">
            <div className="container">
              <div className="side-down">
                <div id="starters">
                  <h2 className="chef">
                    Profile
                  </h2>
                  <div className="chef-about">
                    <img src={token?.user?.image} alt="" />
                    <div className="texts">
                      <h3 className="chef-name">
                        {token?.user?.firstName} {token?.user?.lastName}
                      </h3>
                      <p className="chef-about">{token?.user?.email}</p>
                    </div>
                  </div>
                  <div className="bio">
                    <div className="bio-text">
                      <div className="text">
                        <h4>Full Name : </h4>
                        <span style={{ textTransform: "capitalize" }}>
                          {token?.user?.firstName} {token?.user?.lastName}
                        </span>
                      </div>
                      <div className="text">
                        <h4>Mobile :</h4>
                        <span>{token?.user?.phone}</span>
                      </div>
                      <div className="text">
                        <h4>E-mail :</h4>
                        <span>{token?.user?.email}</span>
                      </div>
                    </div>
                    <div className="bio-text">
                      <div className="text">
                        <h4>Username :</h4>
                        <span>{token?.user?.username}</span>
                      </div>
                      <div className="text">
                        <h4>Birthday :</h4>
                        <span>{token?.user?.birthday}</span>
                      </div>
                    </div>
                  </div>
                  <div className="button">
                    <button
                      className="back"
                      onClick={() => deletingMenu(token?.user?._id)}
                    >
                      Delete
                    </button>
                    <button className="back" onClick={() => navigate("/")}>
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

export default UserProfile;
