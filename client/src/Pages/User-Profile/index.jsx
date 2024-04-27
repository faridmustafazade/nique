import React, { useCallback, useEffect, useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../Hooks/useToken";
import axios from "axios";
import favicon from "../../Assets/Images/favicon.jpg";
import { Helmet } from "react-helmet";
import { Input, Modal } from "antd";
import Swal from "sweetalert2";
import { Base_Url } from "../../api/Base_Url";

const UserProfile = () => {
  const [token] = useToken();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [order, setOrder] = useState([]);
  const [state, setState] = useState({
    image: "",
    firstName: "",
    lastName: "",
    birthday: "",
    phone: "",
  });
  const [userId, setUserId] = useState("");
  const [modal2Open, setModal2Open] = useState(false);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setState({ ...state, image: base64 });
  };
  const getData2 = async () => {
    const res = await axios.get(`${Base_Url}/api`);
    setData2(res.data);
  };
  const getData = async () => {
    const res = await axios.get(`${Base_Url}/api/reservation`);
    setTimeout(() => {
      setData(res.data);
    }, 1000);
  };

  const getOrder = useCallback(async () => {
    const res = await axios.get(
      `${Base_Url}/api/orders/find/${token?.user?.id}`
    );
    setTimeout(() => {
      setOrder(res.data);
    }, 1000);
  }, [token?.user?.id]);

  const deletingProfile = async (id) => {
    await axios.delete(`${Base_Url}/api/${id}`);
    localStorage.clear();
    navigate("/");
  };
  const deletingReserv = async (id) => {
    await axios.delete(`${Base_Url}/api/reservation/${id}`);
    getData();
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const editClick = (userData) => {
    setState({
      image: userData.image,
      firstName: userData.firstName,
      lastName: userData.lastName,
      birthday: userData.birthday,
      phone: userData.phone,
    });
    setUserId(userData._id);
  };
  const updateData = async () => {
    await axios.put(`${Base_Url}/api/${userId}`, state);
    window.location.reload();
  };

  useEffect(() => {
    getData();
    getData2();
    getOrder();
  }, [getOrder, updateData]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deletingProfile(id);
        Swal.fire("Deleted!", "Your profile has been deleted.", "success");
      }
    });
  };
  const handleDeleteReserv = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deletingReserv(id);
        Swal.fire("Deleted!", "Your reservation has been deleted.", "success");
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>User-Profile</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      {!token?.token ? (
        navigate("/sign-in")
      ) : (
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
                  {data2
                    .filter((item) => item._id === token?.user?._id)
                    .map((d2) => (
                      <div key={d2._id} className="name">
                        {token?.user && (
                          <h1 className="our-menud">
                            {d2.firstName} {d2.lastName}
                          </h1>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="side-right">
              <div className="container">
                <div className="side-down">
                  {data2
                    .filter((item) => item._id === token?.user?._id)
                    .map((da2) => (
                      <div key={da2._id} id="starters">
                        <h2 className="chef">Profile</h2>
                        <div className="chef-about">
                          <img src={da2.image} alt="" />
                          <div className="texts">
                            <h3 className="chef-name">
                              {da2.firstName} {da2.lastName}
                            </h3>
                            <p className="chef-about">{da2.email}</p>
                          </div>
                        </div>
                        <div className="bio">
                          <div className="bio-text">
                            <div className="text">
                              <h4>Full Name : </h4>
                              <p style={{ textTransform: "capitalize" }}>
                                {da2.firstName} {da2.lastName}
                              </p>
                            </div>
                            <div className="text">
                              <h4>Mobile :</h4>
                              <p>{da2.phone}</p>
                            </div>
                            <div className="text">
                              <h4>E-mail :</h4>
                              <p>{da2.email}</p>
                            </div>
                          </div>
                          <div className="bio-text text-b">
                            <div className="text">
                              <h4>Username :</h4>
                              <p>{da2.username}</p>
                            </div>
                            <div className="text">
                              <h4>Birthday :</h4>
                              <p>{da2.birthday}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                  {data.filter((item) => item.email.includes(token.user.email))
                    .length > 0 && (
                    <div className="reserv-menu">
                      <h2 className="reservation">My Reservations</h2>
                      {data
                        .filter((item) => item.email.includes(token.user.email))
                        .sort((a, b) => a.dates.day.localeCompare(b.dates.day))
                        .map((d) => (
                          <div key={d._id} className="eat">
                            <div className="texts">
                              <div className="cost">
                                <h3 className="food-name">{d.tables}</h3>
                              </div>
                              <div className="coast">
                                <p className="amount">{d.dates.hour}</p>
                                <p className="food-about">{d.dates.day}</p>
                              </div>

                              <button
                                className="backs"
                                onClick={() => handleDeleteReserv(d._id)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}

                  {order.filter((item) => item.userId.includes(token.user._id))
                    .length > 0 && (
                    <div className="reserv-menu">
                      <h2 className="reservation">My Orders</h2>
                      {order
                        .filter((item) => item.userId.includes(token.user._id))
                        .map((d) => (
                          <div key={d._id} className="reserv-menu">
                            <div className="eat">
                              <div className="eat-image">
                                <div className="image">
                                  {d.products.slice(0, 1).map((product) => (
                                    <img
                                      key={product._id}
                                      src={product.image}
                                      alt=""
                                    />
                                  ))}
                                </div>
                              </div>

                              <div className="texts" style={{ width: 200 }}>
                                <div>
                                  {d.products?.map((pro) => (
                                    <p
                                      style={{ fontFamily: "chillax-regular" }}
                                    >
                                      Price: {pro.price}$
                                    </p>
                                  ))}
                                  {d.products?.map((pro) => (
                                    <p
                                      style={{ fontFamily: "chillax-regular" }}
                                    >
                                      Quantity: {pro.cartQuantity}
                                    </p>
                                  ))}
                                  <p style={{ fontFamily: "chillax-regular" }}>
                                    Subtotal price: {d.subtotal / 100}$
                                  </p>
                                  <p style={{ fontFamily: "chillax-regular" }}>
                                    Total price: {d.total / 100}$
                                  </p>
                                </div>
                              </div>
                              <div>
                                <p style={{ fontFamily: "chillax-regular" }}>
                                  Payment status: {d.payment_status}
                                </p>
                                <p style={{ fontFamily: "chillax-regular" }}>
                                  Payment day: {d.createdAt.substring(0, 10)}
                                </p>
                                {/* <p style={{ fontFamily: "chillax-regular" }}>
                                Payment time: {d.createdAt.substring(11, 16)}
                              </p> */}
                                <p
                                  style={{
                                    fontFamily: "chillax-regular",
                                  }}
                                >
                                  Delivery status:{" "}
                                  <span
                                    style={{
                                      fontFamily: "chillax",
                                      color:
                                        d.delivery_status === "pending"
                                          ? "red"
                                          : d.delivery_status === "Accepted"
                                          ? "#9e9e0b"
                                          : "green",
                                    }}
                                  >
                                    {d.delivery_status}
                                  </span>
                                </p>
                                <p style={{ fontFamily: "chillax-regular" }}>
                                  City: {d.shipping.address.city}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}

                  {data2.length > 0 && (
                    <div className="button">
                      <button
                        className="back"
                        onClick={() => handleDelete(token?.user?._id)}
                      >
                        Delete Profile
                      </button>
                      <button
                        type="primary"
                        onClick={() => {
                          setModal2Open(true);
                          editClick(token.user);
                        }}
                        className="back"
                      >
                        Edit Profile
                      </button>
                      <button className="back" onClick={() => navigate("/")}>
                        Go back
                      </button>
                    </div>
                  )}
                  <Modal
                    title="Update User Profile"
                    centered
                    open={modal2Open}
                    onOk={() => {
                      setModal2Open(false);
                      updateData();
                    }}
                    onCancel={() => setModal2Open(false)}
                  >
                    <label>Enter image</label>
                    <Input
                      id="image"
                      name="image"
                      type="file" // Set input type to 'file'
                      className="input"
                      onChange={(e) => handleFileUpload(e)}
                    />
                    <label>Enter firstName</label>
                    <Input
                      name="firstName"
                      onChange={handleChange}
                      value={state.firstName}
                      placeholder="Enter firstName"
                    />
                    <label>Enter lastName</label>
                    <Input
                      name="lastName"
                      onChange={handleChange}
                      value={state.lastName}
                      placeholder="Enter lastName"
                    />

                    <label>Enter birthday</label>
                    <Input
                      name="birthday"
                      onChange={handleChange}
                      value={state.birthday}
                      placeholder="Enter birthday"
                    />

                    <label>Enter phone</label>
                    <Input
                      name="phone"
                      onChange={handleChange}
                      value={state.phone}
                      placeholder="Enter phone"
                    />
                  </Modal>
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
      )}
    </>
  );
};

export default UserProfile;
