import React, { useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";

import shopping from "../../../Assets/Images/6326e1adee6086ccd2d745e1_icon-cart.svg";
const Aside = () => {
  const [menu, setMenu] = useState(false);
  const [classes, setClasses] = useState(false);
  const [blog, setBlog] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="full-aside">
        <div className="aside">
          <div className="images">
            <img
              src="https://assets.website-files.com/6321d0d284b5b7ca3857fad3/632593ede9b8135aac346328_favicon.jpg"
              alt=""
            />
            <h1 className="title">nique</h1>
          </div>
          <p
            style={{
              fontFamily: "bitter-rose",
              color: "#face8d",
              fontSize: "36px",
              paddingTop: 5,
            }}
          >
            Admin Dashboard
          </p>
          <div className="aside-down">
            <div className="asides class" onClick={() => setMenu(!menu)}>
              <div className="show">
                <img
                  src="https://uploads-ssl.webflow.com/61f7c38c8268bb1cdf5a1316/6220c2b492ca1738f08b5e52_Bar.svg"
                  alt=""
                />
                <Link className="asides-text">menu</Link>
              </div>
              {menu && (
                <ul>
                  <li>
                    <Link className="asides-text textss" to="/admin/menu">
                      <AiFillCaretRight /> show menu
                    </Link>
                  </li>
                  <li>
                    <Link className="asides-text textss" to="/admin/add-menu">
                      <AiFillCaretRight /> add menu
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="asides class" onClick={() => setClasses(!classes)}>
              <div className="show">
                <img
                  src="https://uploads-ssl.webflow.com/61f7c38c8268bb1cdf5a1316/6200c36bde33ea34634eb44e_Icons-6.svg"
                  alt=""
                />
                <Link className="asides-text">classes</Link>
              </div>
              {classes && (
                <ul>
                  <li>
                    <Link className="asides-text textss" to={"/admin/classes"}>
                      <AiFillCaretRight /> show classes
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="asides-text textss"
                      to={"/admin/add-classes"}
                    >
                      <AiFillCaretRight /> add class
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="asides class" onClick={() => setBlog(!blog)}>
              <div className="show">
                <img
                  src="https://uploads-ssl.webflow.com/61f7c38c8268bb1cdf5a1316/6200c36a7fb5d5e2d9075dc7_Icons-3.svg"
                  alt=""
                />
                <Link className="asides-text">blog</Link>
              </div>
              {blog && (
                <ul>
                  <li>
                    <Link className="asides-text textss" to={"/admin/blog"}>
                      <AiFillCaretRight /> show blog
                    </Link>
                  </li>
                  <li>
                    <Link className="asides-text textss" to={"/admin/add-blog"}>
                      <AiFillCaretRight /> add blog
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <div
              className="asides"
              onClick={() => navigate("/admin/reservation")}
            >
              <TbTruckDelivery style={{fontSize: 25,color:"#627183" }}/>

              <p className="asides-text">reservation</p>
            </div>
            <div className="asides" onClick={() => navigate("/admin/order")}>
              <img src={shopping} style={{fontSize: 20 }} />
              <p className="asides-text">order</p>
            </div>
            <div className="asides" onClick={() => navigate("/admin/users")}>
              <img
                src="https://uploads-ssl.webflow.com/61f7c38c8268bb1cdf5a1316/6200c36b574bad028b19eefd_Icons-7.svg"
                alt=""
              />
              <p className="asides-text">users</p>
            </div>
            <div className="asides" onClick={() => navigate("/admin/message")}>
              <img
                src="https://uploads-ssl.webflow.com/61f7c38c8268bb1cdf5a1316/6200c36969cb732c1d5166a2_Icons-33.svg"
                alt=""
              />
              <p className="asides-text">message</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aside;
