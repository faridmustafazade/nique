import React from "react";
import "./style.scss";
import { DownOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
const Header = () => {
  const items = [
    {
      label: (
        <Link className="drop-profile" href="https://www.antgroup.com">
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
        <Link className="drop-profile" to="/">
          <img
            src="https://uploads-ssl.webflow.com/61f7c38c8268bb1cdf5a1316/61f7cef537961e9814594b19_Profile-Log-out.svg"
            alt=""
          />
          Log Out
        </Link>
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
                    src="https://static1.personality-database.com/profile_images/f633a31056d54bcb8f8be04e133db261.png"
                  />
                </div>
                <div className="text">
                  <p className="text-p">welcome</p>
                  <h4 className="text-h4">
                    Farid Mustafazade
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
