import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Aside from "../../../../Layouts/admin/Aside";
import Header from "../../../../Layouts/admin/Header";
import "./style.scss";
import favicon from "../../../../Assets/Images/favicon.jpg";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { Base_Url } from "../../../../api/Base_Url";

const MessageDetails = () => {
  const [data, setData] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const deletingMessage = async (id) => {
    await axios.delete(`${Base_Url}/api/contact/${params.id}`);
    await getData();
    navigate("/admin/message");
  };
  const getData = async () => {
    const res = await axios.get(
      `${Base_Url}/api/contact/${params.id}`
    );
    setData(res.data);
  };

  useEffect(() => {
    getData();
  });

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
        <title>Message</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
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
              <div style={{display:"flex", gap:20}}>
                <button
                  className="deleting"
                  onClick={() => handleDelete(data._id)}
                >
                  Delete
                </button>
                <button
                  className="deleting"
                  onClick={() => navigate('/admin/message')}
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageDetails;
