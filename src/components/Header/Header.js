import React from "react";

import Logo from "../../icons/logo.svg";
import { ReactComponent as Notification } from "../../icons/NotificationBell.svg";
import { ReactComponent as ProfilePic } from "../../icons/user.svg";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={Logo} alt="Logo" />
        <h2> Workshop App </h2>
      </div>
      <div className="header__right">
        <Notification fill=" #9A9AB0" />
        <ProfilePic fill=" #9A9AB0" />
        <div className="user">
          <h3>Brajesh Mishra</h3>
          <p>Creator</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
