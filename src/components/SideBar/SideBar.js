import React from "react";
import "./sidebar.scss";

import { ReactComponent as Create } from "../../icons/plus.svg";
import { ReactComponent as View } from "../../icons/Menu.svg";
import { ReactComponent as Settings } from "../../icons/settings.svg";

import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ul>
          <NavLink to={"/"} activeClassName="selected">
            <Create fill=" #9A9AB0" />
          </NavLink>
          <NavLink to={"/workshops"} activeClassName="selected">
            <View fill=" #9A9AB0" />
          </NavLink>
        </ul>
      </div>
      <div className="sidebar__bottom">
        <ul>
          <NavLink to={"/b"} activeClassName="selected">
            <Settings fill=" #9A9AB0" />
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
