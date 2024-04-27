import React, { useEffect, useState } from "react";
import Aside from "../../../Layouts/admin/Aside";
import "./style.scss";
import Header from "../../../Layouts/admin/Header";
import { useNavigate } from "react-router-dom";
import useToken from "../../../Hooks/useToken";
import favicon from "../../../Assets/Images/favicon.jpg";
import { Helmet } from "react-helmet";
import { Input, Modal } from "antd";
import axios from "axios";
import { Base_Url } from "../../../api/Base_Url";

const Profile = () => {
  const [token] = useToken();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [modal2Open, setModal2Open] = useState(false);
  const [state, setState] = useState({
    image: "",
    firstName: "",
    lastName: "",
    birthday: "",
    phone: "",
  });
  const [userId, setUserId] = useState("");

  const getData = async () => {
    const res = await axios.get(`${Base_Url}/api`);
    setData(res.data);
  };
  const logoutFunc = () => {
    localStorage.clear();
    window.location = "/login-admin";
  };

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
  }, []);

  return (
    <>
      <Helmet>
        <title>Profile</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      {!token?.token ? (
        navigate("/login-admin")
      ) : token?.user?.isAdmin === false ? (
        logoutFunc()
      ) : (
        <div className="dashboard-full">
          <Aside />
          <div className="side-right">
            <Header />
            <div className="side-down">
              <h1 className="down-h1">Profile</h1>
              {data
                .filter((item) => item._id === token?.user?._id)
                .map((d) => (
                  <div key={d._id} className="white-div">
                    <img
                      style={{ width: "100%", objectFit: "cover" }}
                      src="https://assets.website-files.com/61f7c38c8268bb1cdf5a1316/61fbd739248733a9189cdf17_Uesr-Banner.png"
                      alt=""
                    />
                    <div className="profile">
                      <div className="profile-icon">
                        <img
                          src={
                            d.image !== ""
                              ? d.image
                              : "https://avatars.githubusercontent.com/u/126600662?v=4"
                          }
                          alt=""
                        />
                      </div>
                      <div className="profile-text">
                        <h3>
                          {d.firstName} {d.lastName}
                        </h3>
                        <h4>{d.email}</h4>
                      </div>
                    </div>
                    <div className="bio">
                      <div className="bio-text">
                        <h4>
                          Full Name :{" "}
                          <span>
                            {d.firstName} {d.lastName}
                          </span>
                        </h4>
                        <h4>
                          Mobile : <span>{d.phone}</span>
                        </h4>
                        <h4>
                          E-mail : <span>{d.email}</span>
                        </h4>
                      </div>
                      <div className="bio-text">
                        <h4>
                          Username : <span>{d.username}</span>
                        </h4>
                        <h4>
                          Birthday : <span>{d.birthday}</span>
                        </h4>
                      </div>
                    </div>
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
                  </div>
                ))}
              <Modal
                title="Update Profile"
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
