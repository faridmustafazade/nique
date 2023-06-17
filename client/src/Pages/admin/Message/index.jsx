import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Aside from "../../../Layouts/admin/Aside";
import Header from "../../../Layouts/admin/Header";
import "./style.scss";

const Message = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const res = await axios.get("http://localhost:2003/api/contact");
    setData(res.data);
  };
  const deletingMenu = async (id) => {
    await axios.delete(`http://localhost:2003/api/contact/${id}`);
    await getData();
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="msg-full">
        <Aside />
        <div className="side-right">
          <Header />
          <div className="side-down">
            <h1 className="down-h1">Messages</h1>
            <div className="white-div">
              {/* <div className="inputs">
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
                      </div> */}
              {data

                // .filter(
                //   (item) =>
                //     item.name.toLowerCase().includes(value.toLowerCase()) &&
                //     (category === "" || item.category === category)
                // )
                .map((d) => (
                  <div key={d._id} className="div-menu">
                    <div className="msgs">
                      <div className="texts">
                        <div className="mail" onClick={() => navigate(d._id)}>
                          <div className="name-bio">
                            <h4>Name</h4>
                            <h3 className="mail-name">{d.name}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="buttons">
                        <div
                          className="email-bio"
                          onClick={() => navigate(d._id)}
                        >
                          <h4>Email</h4>
                          <p className="email"> {d.email}</p>
                        </div>
                        <button
                          className="deleting"
                          onClick={() => deletingMenu(d._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              {/* <Modal
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
              </Modal> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
