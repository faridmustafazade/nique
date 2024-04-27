import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../../../Hooks/useToken";
import Aside from "../../../../Layouts/admin/Aside";
import Header from "../../../../Layouts/admin/Header";
import favicon from "../../../../Assets/Images/favicon.jpg";
import "./style.scss";
import { Card } from "antd";
import { Helmet } from "react-helmet";
import { Base_Url } from "../../../../api/Base_Url";
const ShowUsers = () => {
  const [token] = useToken();
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get(`${Base_Url}/api`);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Users</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      {!token?.token ? (
        navigate("/login-admin")
      ) : token?.user?.isAdmin === true ? (
        <div className="users-full">
          <Aside />
          <div className="side-right">
            <Header />
            <div className="side-down">
              <h1 className="down-h1">Users</h1>
              <div className="white-div">
                {data
                  .filter((item) => item.isAdmin !== true)
                  .map((d) => (
                    <Card
                      key={d._id}
                      hoverable
                      style={{
                        position: "relative",
                        cursor: "auto",
                        width: 370,
                        height: "auto",
                        marginTop: "30px",
                      }}
                      cover={
                        <div
                          style={{
                            display: "flex",
                            marginTop: "15px",
                            alignItems: "center",
                            gap: "30px",
                          }}
                        >
                          <img
                            style={{
                              marginLeft: "15px",
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                            }}
                            alt="example"
                            src={
                              d.image !== ""
                                ? d.image
                                : "https://avatars.githubusercontent.com/u/126600662?v=4"
                            }
                          />
                          <div>
                            <h4
                              style={{ textTransform: "capitalize" }}
                              className="h4"
                            >
                              Firstname: {d.firstName}
                            </h4>
                            <h4
                              style={{ textTransform: "capitalize" }}
                              className="h4"
                            >
                              Lastname: {d.lastName}
                            </h4>
                          </div>
                        </div>
                      }
                    >
                      <h4 className="h4">Username: {d.username}</h4>
                      <h4 className="h4">E-mail: {d.email}</h4>
                      <h4 className="h4">Password: •••••••••</h4>
                      <h4 className="h4">Birthday: {d.birthday}</h4>
                      <h4 className="h4">Phone: {d.phone}</h4>
                    </Card>
                  ))}
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

export default ShowUsers;
