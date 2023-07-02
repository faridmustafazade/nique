import React from "react";
import "./style.scss";
import { DownOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import useToken from "../../../Hooks/useToken";
const Header = () => {
  const logoutFunc = () => {
    localStorage.clear();
    window.location = "/";
  };
  const [token] = useToken();

  const items = [
    {
      label: (
        <Link className="drop-profile" to={"/admin"}>
          <img
            src="https://uploads-ssl.webflow.com/61f7c38c8268bb1cdf5a1316/6200c36b574bad028b19eefd_Icons-7.svg"
            alt=""
          />
          Profile
        </Link>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <div className="drop-profile" onClick={logoutFunc}>
          <img
            src="https://uploads-ssl.webflow.com/61f7c38c8268bb1cdf5a1316/61f7cef537961e9814594b19_Profile-Log-out.svg"
            alt=""
          />
          Log Out
        </div>
      ),
      key: "1",
    },
  ];
  return (
    <>
      <nav className="navbar">
        <div className="profile-card">
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <Link onClick={(e) => e.preventDefault()}>
              <Space>
                <div className="image">
                  <Avatar
                    className="avatar"
                    alt="Remy Sharp"
                    src={
                      token?.user?.image !== ""
                        ? token?.user?.image
                        : "https://avatars.githubusercontent.com/u/126600662?v=4"
                    }
                  />
                </div>
                <div className="text">
                  <p className="text-p">welcome</p>
                  <h4 className="text-h4">
                    {token?.user?.firstName} {token?.user?.lastName}
                    <DownOutlined />
                  </h4>
                </div>
              </Space>
            </Link>
          </Dropdown>
        </div>
      </nav>
    </>
  );
};

export default Header;
