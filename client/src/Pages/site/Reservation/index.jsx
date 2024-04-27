import Aos from "aos";
import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../Layouts/client/Footer";
import "./style.scss";
import "aos/dist/aos.css";
import favicon from "../../../Assets/Images/favicon.jpg";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReservationSchema } from "./schema/ReservForm";
import axios from "axios";
import { toast } from "react-toastify";
import useToken from "../../../Hooks/useToken";
import { Base_Url } from "../../../api/Base_Url";

const Reservation = () => {
  const [token] = useToken();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ReservationSchema),
  });

  const onSubmit = () => {
    const values = getValues();
    axios
      .post(`${Base_Url}/api/reservation`, {
        name: values.name,
        email: values.email,
        count: values.count,
        tables: values.tables,
        dates: {
          day: values.dates.day,
          hour: values.dates.hour,
        },
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
    Aos.init({});
  }, []);
  return (
    <>
      <Helmet>
        <title>Reservation</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      {!token?.token ? (
        navigate("/sign-in")
      ) : (
        <div id="full-reservation">
          <div className="reservation">
            <div className="side-left">
              <div className="container">
                <div className="side-left-reservation">
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
                      className="book"
                      data-aos="fade-down"
                      data-aos-duration="2000"
                    >
                      Book a table
                    </h1>
                    <h1
                      className="reservation"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      reservation
                    </h1>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
            <div className="side-right">
              <h2 className="book-h2">Book a table</h2>
              <p className="right-about">
                Volutpat maecenas volutpat blandit aliquam etiam erat velit
                scelerisque. Arcu non odio euismod lacinia. Tortor aliquam nulla
                facilisi cras fermentum odio eu.
              </p>
              <div className="container">
                <div className="side-down">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    action=""
                    className="forms"
                  >
                    <div className="form">
                      <label className="label">Name</label>
                      <input
                        className="input"
                        placeholder="Enter your name"
                        {...register("name")}
                        value={token.user?.firstName}
                      />
                      {errors.name && <p>{errors.name.message}</p>}
                    </div>
                    <div className="form">
                      <label className="label">E-mail</label>
                      <input
                        type="email"
                        className="input"
                        placeholder="Enter your email address"
                        {...register("email")}
                        value={token.user?.email}
                      />
                      {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div className="form">
                      <label className="label">Number of Guests</label>
                      <input
                        {...register("count")}
                        type="number"
                        className="input"
                        placeholder="2"
                      />
                      {errors.count && (
                        <p style={{ color: "#face8d" }}>
                          {errors.count.message}
                        </p>
                      )}
                    </div>
                    <div className="form">
                      <label className="label">Table</label>
                      <input
                        {...register("tables")}
                        className="input"
                        placeholder="Table 1"
                      />
                      {errors.tables && (
                        <p style={{ color: "#face8d" }}>
                          {errors.tables.message}
                        </p>
                      )}
                    </div>
                    <div className="form">
                      <label className="label">Date</label>
                      <input
                        type="date"
                        className="input date"
                        placeholder="01.05.2003"
                        {...register("dates.day")}
                      />
                      {errors.dates?.day && (
                        <p style={{ color: "#face8d" }}>
                          {errors.dates.day.message}
                        </p>
                      )}
                    </div>
                    <div className="form">
                      <label className="label">Time</label>
                      <input
                        className="input time"
                        placeholder="6:00 PM"
                        {...register("dates.hour")}
                      />
                      {errors.dates?.hour && (
                        <p style={{ color: "#face8d" }}>
                          {errors.dates.hour.message}
                        </p>
                      )}
                    </div>
                    <button className="send">book a table</button>
                  </form>
                  <div className="reservation-footer">
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
      )}
    </>
  );
};

export default Reservation;
