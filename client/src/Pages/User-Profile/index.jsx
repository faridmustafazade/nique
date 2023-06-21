import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useToken from "../../Hooks/useToken";
import axios from "axios";
const UserProfile = () => {
  const [token] = useToken();
  const navigate = useNavigate();
  const deletingMenu = async (id) => {
    await axios.delete(`http://localhost:2003/api/${id}`);
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      {!token?.token ? (
        navigate("/sign-in")
      ) : (
        <div className="profile-full">
          <div className="side-right">
            <div className="side-down">
              <h1 className="down-h1">Profile</h1>
              <div className="white-div">
                <img
                  style={{ width: "100%", objectFit: "cover" }}
                  src="https://assets.website-files.com/61f7c38c8268bb1cdf5a1316/61fbd739248733a9189cdf17_Uesr-Banner.png"
                  alt=""
                />
                <div className="profile">
                  <div className="profile-icon">
                    <img
                      src={
                        token?.user?.image !== ""
                          ? token?.user?.image
                          : "https://avatars.githubusercontent.com/u/126600662?v=4"
                      }
                      alt=""
                    />
                  </div>
                  <div className="profile-text">
                    <h3 style={{ textTransform: "capitalize" }}>
                      {token?.user?.firstName} {token?.user?.lastName}
                    </h3>
                    <h4>{token?.user?.email}</h4>
                  </div>
                </div>
                <div className="bio">
                  <div className="bio-text">
                    <h4>
                      Full Name :{" "}
                      <span style={{ textTransform: "capitalize" }}>
                        {token?.user?.firstName} {token?.user?.lastName}
                      </span>
                    </h4>
                    <h4>
                      Mobile : <span>{token?.user?.phone}</span>
                    </h4>
                    <h4>
                      E-mail : <span>{token?.user?.email}</span>
                    </h4>
                  </div>
                  <div className="bio-text">
                    <h4>
                      Username : <span>{token?.user?.username}</span>
                    </h4>
                    <h4>
                      Birthday : <span>{token?.user?.birthday}</span>
                    </h4>
                  </div>
                </div>
                <div className="buttons">
                  <button
                    className="deleting"
                    onClick={() => deletingMenu(token?.user?._id)}
                  >
                    Delete
                  </button>
                  <button className="goback" onClick={() => navigate("/")}>
                    Go Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
