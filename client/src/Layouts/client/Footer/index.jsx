import React, { useState } from "react";
import "./style.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowRight, BsHeart } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { LuClock3 } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { Avatar, Dropdown, Menu, Modal } from "antd";
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
  return (
    <>
      <div id="full-footer">
        <div className="footer">
          <Dropdown
            overlay={
              <Menu style={{ width: 250 }}>
                <h3 style={{ marginLeft: 10 }}>Pages</h3>
                <Menu.Item key="0">
                  <Link className="drop" to="/menu">
                    Menu
                    <BsArrowRight className="menu-arrow" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="1">
                  <Link className="drop" to="/restaurant">
                    Restaurant <BsArrowRight className="menu-arrow" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link className="drop" to="/classes">
                    Classes <BsArrowRight className="menu-arrow" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link className="drop" to="/contact">
                    Contact <BsArrowRight className="menu-arrow" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link className="drop" to="/shop">
                    Shop <BsArrowRight className="menu-arrow" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link className="drop blog" to="/blog">
                    Blog <BsArrowRight className="menu-arrow" />
                  </Link>
                </Menu.Item>
              </Menu>
            }
            trigger={["hover"]}
          >
            <div className="dropbtn">
              <AiOutlineMenu />
            </div>
          </Dropdown>
          <Dropdown
            overlay={
              <Menu style={{ width: 250 }}>
                <h3 className="open">Opening Hours</h3>
                <Menu.Item key="0">
                  <h3 className="day">
                    Mon <span>closed</span>
                  </h3>
                </Menu.Item>
                <Menu.Item key="1">
                  <h3 className="day">
                    Tue - Fri <span>4pm - 8pm</span>
                  </h3>
                </Menu.Item>
                <Menu.Item key="2">
                  <h3 className="day">
                    Sat - Sun <span>5pm - 11pm</span>
                  </h3>
                </Menu.Item>
              </Menu>
            }
            trigger={["hover"]}
          >
            <button className="clockbtn">
              <LuClock3 />
            </button>
          </Dropdown>

          <div className="basket" onClick={()=>navigate('/cart')}>
            <FiShoppingCart />
          </div>
          <div className="basket" onClick={() => navigate("/wishlist")}>
            <BsHeart />
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
                        style={{ width: "25px" }}
                        src="https://uploads-ssl.webflow.com/61f7c38c8268bb1cdf5a1316/6200c36b574bad028b19eefd_Icons-7.svg"
                        alt=""
                      />
                      <h3 className="day" style={{ marginRight: "10px" }}>
                        Profile
                      </h3>
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
                  src={
                    token?.user?.image !== ""
                      ? token?.user?.image
                      : "https://avatars.githubusercontent.com/u/126600662?v=4"
                  }
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
