import axios from "axios";
import React, { useEffect, useState } from "react";
import Aside from "../../../../Layouts/admin/Aside";
import Header from "../../../../Layouts/admin/Header";
import "./style.scss";
import { Button, Input, Modal, Select } from "antd";

const { Option } = Select;
const Show = () => {
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
  const [sorting, setSorting] = useState(true);

  const getData = async () => {
    const res = await axios.get("http://localhost:2003/api/menu");
    setData(res.data);
  };
  const getCategory = async () => {
    const res = await axios.get("http://localhost:2003/api/menu_category");
    setCat(res.data);
  };
  const deletingMenu = async (id) => {
    await axios.delete(`http://localhost:2003/api/menu/${id}`);
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
    });
    setUserId(userData._id);
  };

  const updateData = async () => {
    await axios.put(`http://localhost:2003/api/menu/${userId}`, state);
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
  }, []);

  return (
    <>
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
                <Button onClick={Sorting}>Sort by price</Button>
              </div>
              {data

                .filter(
                  (item) =>
                    item.name.toLowerCase().includes(value.toLowerCase()) &&
                    (category === "" || item.category === category)
                )
                .map((d) => (
                  <div className="div-menu">
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
                          onClick={() => deletingMenu(d._id)}
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
                title="Vertically centered modal dialog"
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

                <label>Choose a category</label>
                <Input
                  name="category"
                  value={state.category}
                  onChange={handleChange}
                  placeholder="Enter category"
                />
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;
