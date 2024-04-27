import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../../../Hooks/useToken";
import Aside from "../../../../Layouts/admin/Aside";
import Header from "../../../../Layouts/admin/Header";
import "./style.scss";
import { Button, Input, Modal, Select } from "antd";
import favicon from "../../../../Assets/Images/favicon.jpg";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { Base_Url } from "../../../../api/Base_Url";
const { Option } = Select;
const Show = () => {
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
  const [category, setCategory] = useState("");
  const [modal2Open, setModal2Open] = useState(false);
  const [cat, setCat] = useState([]);
  const [classe, setClasse] = useState([]);
  const [sorting, setSorting] = useState(true);

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

  const getData = async () => {
    const res = await axios.get(`${Base_Url}/api/menu`);
    setData(res.data);
  };
  const getCategory = async () => {
    const res = await axios.get(`${Base_Url}/api/menu_category`);
    setCat(res.data);
  };
  const getClasses = async () => {
    const res = await axios.get(`${Base_Url}/api/classes`);
    setClasse(res.data);
  };

  const deletingMenu = async (id) => {
    await axios.delete(`${Base_Url}/api/menu/${id}`);
    await getData();
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const editClick = (userData) => {
    setState({
      image: userData.image,
      name: userData.name,
      category: userData.category,
      about: userData.about,
      price: userData.price,
      class: userData.class,
    });
    setUserId(userData._id);
  };

  const updateData = async () => {
    console.log(state);
    await axios.put(`${Base_Url}/api/menu/${userId}`, state);
    await getData();
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const changeCategory = (value) => {
    setCategory(value);
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
    getCategory();
    getClasses();
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
        deletingMenu(id);
        Swal.fire("Deleted!", "Menu has been deleted.", "success");
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Menus</title>
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
              <h1 className="down-h1">Menus</h1>
              <div className="white-div">
                <div className="inputs">
                  <div className="inp">
                    <Input
                      className="input"
                      onChange={onChange}
                      placeholder="Search by name"
                    />
                    <Select
                      defaultValue=""
                      style={{ width: 200, textTransform: "capitalize" }}
                      onChange={changeCategory}
                    >
                      <Option style={{ fontFamily: "chillax" }} value="">
                        Filter by category
                      </Option>
                      {cat.map((c) => (
                        <Option
                          key={c._id}
                          style={{
                            width: 200,
                            fontFamily: "chillax",
                            textTransform: "capitalize",
                          }}
                          value={c.category}
                        >
                          {c.category}
                        </Option>
                      ))}
                    </Select>
                  </div>
                  <Button style={{ fontFamily: "chillax" }} onClick={Sorting}>
                    Sort by price
                  </Button>
                </div>
                {data

                  .filter(
                    (item) =>
                      item.name.toLowerCase().includes(value.toLowerCase()) &&
                      (category === "" || item.category === category)
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
                              <h3 className="food-name">{d.name}</h3>
                              <h4 className="amount">{d.category}</h4>
                            </div>
                            <p className="amount">$ {d.price}</p>
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
                  title="Menu Update"
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

                  <label>Enter name</label>
                  <Input
                    name="name"
                    onChange={handleChange}
                    value={state.name}
                    placeholder="Enter name"
                  />

                  <label>Enter about</label>
                  <Input
                    name="about"
                    onChange={handleChange}
                    value={state.about}
                    placeholder="Enter about"
                  />

                  <label>Enter price</label>
                  <Input
                    name="price"
                    onChange={handleChange}
                    value={state.price}
                    placeholder="Enter price"
                  />

                  <label style={{ display: "block" }}>Choose a category</label>
                  <select
                    style={{
                      width: "100%",
                      padding: "0.3rem",
                      border: "1px solid rgb(190, 189, 189)",
                      fontSize: "0.875rem",
                      lineHeight: "1.25rem",
                      borderRadius: "0.375rem",
                      outline: "2px solid transparent",
                      outlineOffset: "2px",
                      fontFamily: "chillax-regular",
                    }}
                    value={state.category}
                    name="category"
                    onChange={handleChange}
                  >
                    {cat.map((c) => (
                      <option key={c._id} value={c.category}>
                        {c.category}
                      </option>
                    ))}
                  </select>
                  <label style={{ display: "block" }}>Choose a class</label>
                  <select
                    style={{
                      width: "100%",
                      padding: "0.3rem",
                      border: "1px solid rgb(190, 189, 189)",
                      fontSize: "0.875rem",
                      lineHeight: "1.25rem",
                      borderRadius: "0.375rem",
                      outline: "2px solid transparent",
                      outlineOffset: "2px",
                      fontFamily: "chillax-regular",
                    }}
                    value={state.class}
                    name="class"
                    onChange={handleChange}
                  >
                    {classe.map((cla) => (
                      <option key={cla._id} value={cla.class}>
                        {cla.class}
                      </option>
                    ))}
                  </select>
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

export default Show;
