import axios from "axios";
import React, { useEffect, useState } from "react";
import Aside from "../../../../Layouts/admin/Aside";
import Header from "../../../../Layouts/admin/Header";
import "./style.scss";
import { Button, Input, Modal } from "antd";
import useToken from "../../../../Hooks/useToken";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import favicon from "../../../../Assets/Images/favicon.jpg";
import Swal from "sweetalert2";
import { Base_Url } from "../../../../api/Base_Url";

const ShowClass = () => {
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
  const [type, setType] = useState("");
  const [modal2Open, setModal2Open] = useState(false);
  const [sorting, setSorting] = useState(true);

  const getData = async () => {
    const res = await axios.get(`${Base_Url}/api/classes`);
    setData(res.data);
  };

  const deletingClass = async (id) => {
    await axios.delete(`${Base_Url}/api/classes/${id}`);
    await getData();
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const editClick = (userData) => {
    setState({
      chefImage: userData.chefImage,
      chefName: userData.chefName,
      chefAbout: userData.chefAbout,
      class: userData.class,
      type: userData.type,
      price: userData.price,
      about: userData.about,
      image: userData.image,
    });
    setUserId(userData._id);
  };

  const updateData = async () => {
    console.log(state);
    await axios.put(`${Base_Url}/api/classes/${userId}`, state);
    await getData();
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onChangee = (e) => {
    setType(e.target.value);
  };

  const Sorting = () => {
    let res = [];
    if (sorting === true) {
      setSorting(false);
      res = [...data].sort((a, b) => {
        return a.price - b.price;
      });
    } else {
      setSorting(true);
      res = [...data].sort((a, b) => {
        return b.price - a.price;
      });
    }
    setData(res);
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
        deletingClass(id);
        Swal.fire("Deleted!", "Class has been deleted.", "success");
      }
    });
  };
  return (
    <>
      <Helmet>
        <title>Classes</title>
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
              <h1 className="down-h1">Classes</h1>
              <div className="white-div">
                <div className="inputs">
                  <div className="inp">
                    <Input
                      className="input"
                      onChange={onChange}
                      placeholder="Search by name"
                    />
                    <Input
                      className="input"
                      onChange={onChangee}
                      placeholder="Search by type"
                    />
                  </div>
                  <Button onClick={Sorting}>Sort by price</Button>
                </div>
                {data
                  .filter(
                    (item) =>
                      item.class.toLowerCase().includes(value.toLowerCase()) &&
                      item.type.toLowerCase().includes(type.toLowerCase())
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
                              <h3 className="food-name">{d.class}</h3>
                              <h4 className="amount">{d.type}</h4>
                            </div>
                            <p className="amount">$ {d.price}</p>
                          </div>
                          <div className="about">
                            <p className="food-about">Chef: {d.chefName}</p>
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
                  title="Class Update"
                  centered
                  open={modal2Open}
                  onOk={() => {
                    setModal2Open(false);
                    updateData();
                  }}
                  onCancel={() => setModal2Open(false)}
                >
                  <label>Enter chef image</label>
                  <Input
                    name="chefImage"
                    onChange={handleChange}
                    value={state.chefImage}
                    placeholder="Enter chef image"
                  />

                  <label>Enter chef name</label>
                  <Input
                    name="chefName"
                    onChange={handleChange}
                    value={state.chefName}
                    placeholder="Enter chef name"
                  />

                  <label>Enter chef about</label>
                  <Input
                    name="chefAbout"
                    onChange={handleChange}
                    value={state.chefAbout}
                    placeholder="Enter chef about"
                  />

                  <label>Enter class</label>
                  <Input
                    name="class"
                    onChange={handleChange}
                    value={state.class}
                    placeholder="Enter name"
                  />

                  <label>Choose type</label>
                  <Input
                    name="type"
                    onChange={handleChange}
                    value={state.type}
                    placeholder="Enter type"
                  />
                  <label>Choose price</label>
                  <Input
                    name="price"
                    onChange={handleChange}
                    value={state.price}
                    placeholder="Enter price"
                  />
                  <label>Choose about</label>
                  <Input
                    name="about"
                    onChange={handleChange}
                    value={state.about}
                    placeholder="Enter about"
                  />
                  <label>Choose class image</label>
                  <Input
                    name="image"
                    onChange={handleChange}
                    value={state.image}
                    placeholder="Enter class image"
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

export default ShowClass;
