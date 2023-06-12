import React from "react";
import "./style.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { LuClock3 } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { Dropdown } from "antd";

const Footer = () => {
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
        <Link className="drop" to="">
          Restaurant <BsArrowRight />
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link className="drop">
          Classes <BsArrowRight />
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link className="drop">
          Contact <BsArrowRight />
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link className="drop">
          Shop <BsArrowRight />
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link className="drop blog">
          Blog <BsArrowRight />
        </Link>
      ),
    },
  ];
  return (
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
        <Link className="links" to="">
          Classes
        </Link>
        <button className="footer-btn">Book A Table</button>
      </div>
    </div>
  );
};

export default Footer;
