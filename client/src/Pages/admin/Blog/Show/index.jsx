import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../../../Hooks/useToken";
import Aside from "../../../../Layouts/admin/Aside";
import Header from "../../../../Layouts/admin/Header";
import "./style.scss";
import { Input, Modal } from "antd";
import favicon from "../../../../Assets/Images/favicon.jpg";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { Base_Url } from "../../../../api/Base_Url";

const ShowBlog = () => {
  const [token] = useToken();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [state, setState] = useState({
    image: "",
    name: "",
    category: "",
    about: "",
    price: "",
  });

  const [userId, setUserId] = useState("");
  const [value, setValue] = useState("");
  const [modal2Open, setModal2Open] = useState(false);

  const getData = async () => {
    const res = await axios.get(`${Base_Url}/api/blog`);
    setData(res.data);
  };

  const deletingBlog = async (id) => {
    await axios.delete(`${Base_Url}/api/blog/${id}`);
    await getData();
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const editClick = (userData) => {
    setState({
      image: userData.image,
      description: userData.description,
      about: userData.about,
      history: userData.history,
      history2: userData.history2,
      date: userData.date,
    });
    setUserId(userData._id);
  };

  const updateData = async () => {
    console.log(state);
    await axios.put(`${Base_Url}/api/blog/${userId}`, state);
    await getData();
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

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
        deletingBlog(id);
        Swal.fire("Deleted!", "Message has been deleted.", "success");
      }
    });
  };
  return (
    <>
      <Helmet>
        <title>Blog</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      {!token?.token ? (
        navigate("/login-admin")
      ) : token?.user?.isAdmin === true ? (
        <div className="show-full">
          <Aside />
          <div className="side-right">
            <Header />
            <div className="side-down">
              <h1 className="down-h1">Blog</h1>
              <div className="white-div">
                <div className="inputs">
                  <div className="inp">
                    <Input
                      className="input"
                      onChange={onChange}
                      placeholder="Search by name"
                    />
                  </div>
                </div>
                {data
                  .filter((item) =>
                    item.description.toLowerCase().includes(value.toLowerCase())
                  )
                  .map((d) => (
                    <div key={d._id} className="div-menu">
                      <div className="eat">
                        <div className="eat-image">
                          <div className="image">
                            <img src={d.image} alt="" />
                          </div>
                        </div>
                        <div className="texts">
                          <div className="cost">
                            <div className="type">
                              <h3 className="food-name">{d.description}</h3>
                            </div>
                            <p className="amount">{d.date}</p>
                          </div>
                          <div className="about">
                            <p className="food-about">{d.about}</p>
                          </div>
                        </div>
                        <div className="buttons">
                          <button
                            className="deleting"
                            onClick={() => handleDelete(d._id)}
                          >
                            Delete
                          </button>
                          <button
                            type="primary"
                            onClick={() => {
                              setModal2Open(true);
                              editClick(d);
                            }}
                            className="editing"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                <Modal
                  title="Blog Update"
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
                  <label>Enter description</label>
                  <Input
                    name="description"
                    onChange={handleChange}
                    value={state.description}
                    placeholder="Enter description"
                  />
                  <label>Enter about</label>
                  <Input
                    name="about"
                    onChange={handleChange}
                    value={state.about}
                    placeholder="Enter about"
                  />

                  <label>Enter history</label>
                  <Input
                    name="history"
                    onChange={handleChange}
                    value={state.history}
                    placeholder="Enter history"
                  />

                  <label>Enter history 2</label>
                  <Input
                    name="history2"
                    onChange={handleChange}
                    value={state.history2}
                    placeholder="Enter history 2"
                  />

                  <label>Enter date</label>
                  <Input
                    name="date"
                    type="date"
                    onChange={handleChange}
                    value={state.date}
                    placeholder="Enter date"
                  />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      ) : (
        navigate("/login-admin")
      )}
    </>
  );
};

export default ShowBlog;
