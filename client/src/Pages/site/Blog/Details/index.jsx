import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../../../Layouts/client/Footer";
import "./style.scss";
import "aos/dist/aos.css";
import favicon from "../../../../Assets/Images/favicon.jpg";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Base_Url } from "../../../../api/Base_Url";
const BlogDetails = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const getData = async () => {
    const res = await axios.get(`${Base_Url}/api/blog/${params.id}`);
    setData(res.data);
  };
  useEffect(() => {
    getData();
    Aos.init({});
  }, []);
  return (
    <>
      <Helmet>
        <title>Blog</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <div id="full-blogd">
        <div className="blogd">
          <div className="side-left">
            <div className="container">
              <div className="side-left-blogd">
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
                    className="blog"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    {data.date}
                  </h1>
                  <h1
                    className="news"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    {data.description}
                  </h1>
                </div>
              </div>
              <Footer />
            </div>
          </div>
          <div className="side-right">
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="description"
            >
              <p>{data.history}</p>
              <img
                className="desc-img"
                src="https://assets.website-files.com/6321d0d284b5b793a257fad7/6325cf2c01e34e59c3213552_blog-post-image.webp"
                alt=""
              />
              <h1 className="desc-name">{data.description}</h1>
              <p>{data.history2}</p>
            </div>
            <div className="shop-footer">
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
    </>
  );
};

export default BlogDetails;
