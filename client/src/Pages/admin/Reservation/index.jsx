import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../../Hooks/useToken";
import Aside from "../../../Layouts/admin/Aside";
import Header from "../../../Layouts/admin/Header";
import favicon from "../../../Assets/Images/favicon.jpg";
import "./style.scss";
import { Card } from "antd";
import { Helmet } from "react-helmet";
import { Base_Url } from "../../../api/Base_Url";
const Reservations = () => {
  const [token] = useToken();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [setUsers] = useState([]);

  const getData = async () => {
    const res = await axios.get(`${Base_Url}/api/reservation`);
    setData(res.data);
  };
  const getUser = async () => {
    const res = await axios.get(`${Base_Url}/api/`);
    setUsers(res.data);
  };
  useEffect(() => {
    getData();
    getUser();
  }, [data]);

  return (
    <>
      <Helmet>
        <title>Reservations</title>
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
              <h1 className="down-h1">Reservations</h1>
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
                        ></div>
                      }
                    >
                      <h4 className="h4">Name: {d.name}</h4>
                      <h4 className="h4">E-mail: {d.email}</h4>
                      <h4 className="h4">Customers: {d.count}</h4>
                      <h4 className="h4">Table: {d.tables}</h4>
                      <h4 className="h4">
                        Date: {d.dates.day} | {d.dates.hour}
                      </h4>
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

export default Reservations;
