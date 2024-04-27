import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../../Hooks/useToken";
import Aside from "../../../Layouts/admin/Aside";
import Header from "../../../Layouts/admin/Header";
import favicon from "../../../Assets/Images/favicon.jpg";
import logo from "../../../Assets/Images/logo1.jpg";
import "./style.scss";
import { Card } from "antd";
import { Helmet } from "react-helmet";
import { Base_Url } from "../../../api/Base_Url";
const Orders = () => {
  const [token] = useToken();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get(`${Base_Url}/api/orders`);
    setData(res.data);
  };

  const updateData = async (id) => {
    const res = await axios.get(`${Base_Url}/api/orders/${id}`);
    if (res.data.delivery_status === "pending") {
      await axios.put(`${Base_Url}/api/orders/${id}`, {
        delivery_status: "accepted",
      });
    } else if (res.data.delivery_status === "accepted") {
      await axios.put(`${Base_Url}/api/orders/${id}`, {
        delivery_status: "delivered",
      });
    }
  };

  useEffect(() => {
    getData();
  }, [updateData]);

  return (
    <>
      <Helmet>
        <title>Orders</title>
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
              <h1 className="down-h1">Orders</h1>
              <div className="white-div">
                {data.map((d) => (
                  <Card
                    key={d._id}
                    hoverable
                    style={{
                      position: "relative",
                      cursor: "auto",
                      width: 320,
                      height: 420,
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
                            width: "70px",
                            height: "70px",
                            borderRadius: "5%",
                            objectFit:'cover'
                          }}
                          alt="example"
                          src={
                            d.products[0].image !== ""
                              ? d.products[0].image
                              : { logo }
                          }
                        />
                        <div>
                          <h3
                            style={{
                              textTransform: "capitalize",
                              fontFamily: "chillax-regular",
                              fontWeight: "bold",
                            }}
                          >
                            {d.products[0].name}
                          </h3>
                          <h4
                            style={{ textTransform: "capitalize" }}
                            className="h4"
                          >
                            Quantity: {d.products[0].cartQuantity}
                          </h4>
                          <h4
                            style={{ textTransform: "capitalize" }}
                            className="h4"
                          >
                            Price: {d.products[0].price}$
                          </h4>
                          <h4
                            style={{ textTransform: "capitalize" }}
                            className="h4"
                          >
                            Delivery Price: {(d.total - d.subtotal) / 100}$
                          </h4>
                          <h4
                            style={{ textTransform: "capitalize" }}
                            className="h4"
                          >
                            Total Price: {d.total / 100}$
                          </h4>
                          <h4
                            style={{ textTransform: "capitalize" }}
                            className="h4"
                          >
                            Delivery status:{" "}
                            <span
                              style={{
                                color:
                                  d.delivery_status === "pending"
                                    ? "red"
                                    : d.delivery_status === "accepted"
                                    ? "#9e9e0b"
                                    : "green",
                              }}
                            >
                              {d.delivery_status}
                            </span>
                          </h4>
                        </div>
                      </div>
                    }
                  >
                    <h4 className="h4">Name: {d.shipping.name}</h4>
                    <h4 className="h4">E-mail: {d.shipping.email}</h4>
                    <h4 className="h4">Phone: {d.shipping.phone}</h4>
                    <h4 className="h4">
                      Address: {d.shipping.address.line1} /{" "}
                      {d.shipping.address.city}
                    </h4>
                    {d.delivery_status !== "delivered" && (
                      <button
                        onClick={() => {
                          updateData(d._id);
                        }}
                        className="accept-btn"
                      >
                        {d.delivery_status === "pending"
                          ? "Accepted"
                          : d.delivery_status === "accepted"
                          ? "Delivered"
                          : null}
                      </button>
                    )}
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

export default Orders;
