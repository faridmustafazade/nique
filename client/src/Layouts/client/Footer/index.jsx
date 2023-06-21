import React from "react";
import "./style.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { LuClock3 } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { Avatar, Dropdown } from "antd";
import useToken from "../../../Hooks/useToken";
const Footer = () => {
  const [token] = useToken();
  const navigate = useNavigate();
  const loginFunc = () => {
    navigate("/sign-in");
  };
  const logoutFunc = () => {
    localStorage.clear();
    window.location.reload();
  };

  const items = [
    {
      label: <h3>Pages</h3>,
    },
    {
      key: "1",
      label: (
        <Link className="drop" to="/menu">
          Menu <BsArrowRight />
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link className="drop" to="/restaurant">
          Restaurant <BsArrowRight />
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link className="drop" to="/classes">
          Classes <BsArrowRight />
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link className="drop" to="/contact">
          Contact <BsArrowRight />
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link className="drop" to="/shop">
          Shop <BsArrowRight />
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link className="drop blog" to="/blog">
          Blog <BsArrowRight />
        </Link>
      ),
    },
  ];
  return (
    <>
      <div id="full-footer">
        <div className="footer">
          <Dropdown
            menu={{
              items,
            }}
            placement="topLeft"
          >
            <div className="dropbtn">
              <AiOutlineMenu />
            </div>
          </Dropdown>
          <div className="clock">
            <div className="clock-content">
              <h3 className="open">Opening Hours</h3>
              <h3 className="day">
                Mon <span>closed</span>
              </h3>
              <h3 className="day">
                Tue - Fri <span>4pm - 8pm</span>
              </h3>
              <h3 className="day">
                Sat - Sun <span>5pm - 11pm</span>
              </h3>
            </div>
            <button className="clockbtn">
              <LuClock3 />
            </button>
          </div>
          <div className="basket">
            <FiShoppingCart />
          </div>
          <Link className="links" to="/menu">
            Menu
          </Link>
          <Link className="links" to="/restaurant">
            Restaurant
          </Link>
          <Link className="links" to="/classes">
            Classes
          </Link>
          <button className="footer-btn">
            <Link className="a" to="/reservation">
              Book A Table
            </Link>
          </button>

          <div className="image">
            <div className="av">
              <div className="av-content">
                <h4 className="text-h4">
                  {token?.user?.firstName} {token?.user?.lastName}
                </h4>
                {token?.token && <hr />}
                {token?.token ? (
                  <div className="d">
                    <div
                      className="drop-profile"
                      onClick={() => navigate("/user-profile")}
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/61f7c38c8268bb1cdf5a1316/6200c36b574bad028b19eefd_Icons-7.svg"
                        alt=""
                      />
                      <h3 className="day">Profile</h3>
                    </div>
                    <div className="drop-profile" onClick={logoutFunc}>
                      <img
                        src="https://www.svgrepo.com/show/135250/logout.svg"
                        alt=""
                      />
                      <h3 className="day">Logout</h3>
                    </div>
                  </div>
                ) : (
                  <div className="drop-profile" onClick={loginFunc}>
                    <img
                      className="logicon"
                      src="https://www.svgrepo.com/show/138917/download.svg"
                      alt=""
                    />
                    <h3 className="day">Login</h3>
                  </div>
                )}
              </div>
              <button className="av-btn">
                <Avatar
                  className="avatar"
                  alt="Remy Sharp"
                  src={token?.user?.image}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
