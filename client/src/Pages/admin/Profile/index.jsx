import React from "react";
import Aside from "../../../Layouts/admin/Aside";
import "./style.scss";
import Header from "../../../Layouts/admin/Header";
const Profile = () => {
  return (
    <>
      <div className="dashboard-full">
        <Aside />
        <div className="side-right">
          <Header />
          <div className="side-down">
            <h1 className="down-h1">Profile</h1>
            <div className="white-div"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
