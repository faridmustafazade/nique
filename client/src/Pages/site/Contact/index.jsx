import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../Layouts/client/Footer";
import "./style.scss";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { ContactForm } from "./schema/ContactForm";
import useToken from "../../../Hooks/useToken";
import favicon from "../../../Assets/Images/favicon.jpg";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { Base_Url } from "../../../api/Base_Url";

const Contact = () => {
  const [token] = useToken();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactForm),
  });

  const postData = () => {
    const values = getValues();

    axios
      .post(`${Base_Url}/api/contact`, {
        name: values.name,
        email: values.email,
        message: values.message,
      })
      .then((res) => {
        toast.success(res.data.msg, {
          position: "top-right",
          autoClose: 1000,
        });
      })
      .catch((err) => {
        toast.error(err.response.data.msg, {
          position: "top-right",
          autoClose: 1000,
        });
      });
  };
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <div id="full-contact">
        <div className="contact">
          <div className="side-left">
            <div className="container">
              <div className="side-left-contact">
                <div className="logo">
                  <Link to="/">
                    <img
                      src="https://uploads-ssl.webflow.com/6321d0d284b5b7ca3857fad3/6321d4f35eab748617c65799_logo.svg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="name">
                  <h1 className="contact" data-aos="fade-down">
                    contact
                  </h1>
                  <h1 className="get" data-aos="fade-up">
                    Get in Touch
                  </h1>
                </div>
              </div>
              <Footer />
            </div>
          </div>
          <div className="side-right">
            <p className="right-about">
              Volutpat maecenas volutpat blandit aliquam etiam erat velit
              scelerisque. Arcu non odio euismod lacinia. Tortor aliquam nulla
              facilisi cras fermentum odio eu.
            </p>
            <div className="container">
              <form onSubmit={handleSubmit(postData)} className="side-down">
                <div className="form">
                  <label className="label">Name</label>
                  {token?.token ? (
                    <input
                      className="input"
                      placeholder="Enter your name"
                      {...register("name")}
                      value={token?.user?.firstName}
                      // disabled="true"
                    />
                  ) : (
                    <input
                      {...register("name")}
                      className="input"
                      placeholder="Enter your name"
                    />
                  )}
                  {errors.name && (
                    <p style={{ color: "#face8d" }}>{errors.name.message}</p>
                  )}
                </div>
                <div className="form">
                  <label className="label">Email</label>
                  {token?.token ? (
                    <input
                      {...register("email")}
                      className="input"
                      placeholder="Your email address"
                      value={token?.user?.email}
                    />
                  ) : (
                    <input
                      {...register("email")}
                      className="input"
                      placeholder="Your email address"
                    />
                  )}
                  {errors.email && (
                    <p style={{ color: "#face8d" }}>{errors.email.message}</p>
                  )}
                </div>
                <div className="form">
                  <label className="label">Message</label>
                  <textarea
                    {...register("message")}
                    className="input message"
                    placeholder="Your message"
                  />
                  {errors.message && (
                    <p style={{ color: "#face8d" }}>
                      {errors.message?.message}
                    </p>
                  )}
                </div>

                <button type="submit" className="send">
                  send message
                </button>

                <div className="contact-footer">
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
