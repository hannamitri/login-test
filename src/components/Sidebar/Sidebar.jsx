import React from "react";
import ImageProfile from "../../images/home/profile.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__logo"></div>

      <div>
        <div className="sidebar__dark-mode"></div>
        <figure className="sidebar__profile--mask">
          <img className="sidebar__profile--img" src={ImageProfile} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Sidebar;
