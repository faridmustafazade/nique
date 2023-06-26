import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../Hooks/useToken";
import axios from "axios";
import favicon from "../../Assets/Images/favicon.jpg";
import { Helmet } from "react-helmet";
import { Input, Modal } from "antd";
const UserProfile = () => {
  const [token] = useToken();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [state, setState] = useState({
    image: "",
    firstName: "",
    lastName: "",
    birthday: "",
    phone: "",
  });
  const [userId, setUserId] = useState("");
  const [modal2Open, setModal2Open] = useState(false);
  const [value, setValue] = useState("");

  const getData = async () => {
    const res = await axios.get("http://localhost:2003/api/reservation");
    setData(res.data);
  };
  const deletingProfile = async (id) => {
    await axios.delete(`http://localhost:2003/api/${id}`);
    localStorage.clear();
    navigate("/");
  };
  const deletingReserv = async (id) => {
    await axios.delete(`http://localhost:2003/api/reservation/${id}`);
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
    await axios.put(`http://localhost:2003/api/${userId}`, state);
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    getData();
  }, []);

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
                    <h2 className="chef">Profile</h2>
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
                          <p style={{ textTransform: "capitalize" }}>
                            {token?.user?.firstName} {token?.user?.lastName}
                          </p>
                        </div>
                        <div className="text">
                          <h4>Mobile :</h4>
                          <p>{token?.user?.phone}</p>
                        </div>
                        <div className="text">
                          <h4>E-mail :</h4>
                          <p>{token?.user?.email}</p>
                        </div>
                      </div>
                      <div className="bio-text text-b">
                        <div className="text">
                          <h4>Username :</h4>
                          <p>{token?.user?.username}</p>
                        </div>
                        <div className="text">
                          <h4>Birthday :</h4>
                          <p>{token?.user?.birthday}</p>
                        </div>
                      </div>
                    </div>
                  </div>

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
                              onClick={() => deletingReserv(d._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="button">
                    <button
                      className="back"
                      onClick={() => deletingProfile(token?.user?._id)}
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
                      name="image"
                      onChange={handleChange}
                      value={state.image}
                      placeholder="Enter image"
                    />
                    <label>Enter fisrtName</label>
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
