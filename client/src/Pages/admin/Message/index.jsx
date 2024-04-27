import { Button, Input } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../../Hooks/useToken";
import Aside from "../../../Layouts/admin/Aside";
import Header from "../../../Layouts/admin/Header";
import "./style.scss";
import favicon from "../../../Assets/Images/favicon.jpg";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { Base_Url } from "../../../api/Base_Url";

const Message = () => {
  const [token] = useToken();

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [sorting, setSorting] = useState(true);
  const getData = async () => {
    const res = await axios.get(`${Base_Url}/api/contact`);
    setData(res.data);
  };
  const deletingMessage = async (id) => {
    await axios.delete(`${Base_Url}/api/contact/${id}`);
    await getData();
  };
  const Sorting = () => {
    let res = [];
    if (sorting === true) {
      setSorting(false);
      res = [...data].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else {
      setSorting(true);
      res = [...data].sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    setData(res);
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
        deletingMessage(id);
        Swal.fire("Deleted!", "Message has been deleted.", "success");
      }
    });
  };
  return (
    <>
      <Helmet>
        <title>Messages</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      {!token?.token ? (
        navigate("/login-admin")
      ) : token?.user?.isAdmin === true ? (
        <div className="msg-full">
          <Aside />
          <div className="side-right">
            <Header />
            <div className="side-down">
              <h1 className="down-h1">Messages</h1>
              <div className="white-div">
                <div className="filters">
                  <Input onChange={onChange} placeholder="Search by name" />
                  <Button onClick={Sorting}>Filter by name</Button>
                </div>
                {data
                  .filter((item) =>
                    item.name.toLowerCase().includes(value.toLowerCase())
                  )
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
                            onClick={() => handleDelete(d._id)}
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
      ) : (
        navigate("/login-admin")
      )}
    </>
  );
};

export default Message;
