import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Aside from "../../../../Layouts/admin/Aside";
import Header from "../../../../Layouts/admin/Header";
import "./style.scss";

const MessageDetails = () => {
  const [data, setData] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const deletingMenu = async (id) => {
    await axios.delete(`http://localhost:2003/api/contact/${params.id}`);
    await getData();
    navigate("/admin/message");
  };
  const getData = async () => {
    const res = await axios.get(
      `http://localhost:2003/api/contact/${params.id}`
    );
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="msgd-full">
        <Aside />
        <div className="side-right">
          <Header />
          <div className="side-down">
            <h1 className="down-h1">Message</h1>
            <div className="white-div">
              <div className="div-menu">
                <div className="name-context">
                  <h4 className="name-title">Name:</h4>
                  <p className="name">{data.name}</p>
                </div>
                <div className="email-context">
                  <h4 className="email-title">E-mail:</h4>
                  <p className="email">{data.email}</p>
                </div>
              </div>
              <div className="message-context">
                <p className="message-c">{data.message}</p>
              </div>
              <button
                className="deleting"
                onClick={() => deletingMenu(data._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageDetails;
