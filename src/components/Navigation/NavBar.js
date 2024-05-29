import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import "./navbar.css";

function NavBar() {
  return (
    <div className="navBarBox">
      <div className="navBarLeft">
        <span className="logo">facebook</span>
      </div>
      <div className="navBarCenter">
        <div className="searchBarBox">
          <SearchIcon className=" searchIcon" />
          <input placeholder="Seach for your friend" className="seachInput" />
        </div>
      </div>

      <div className="navBarRight">
        <div className="navBarLinks">
          <span className="navBarLink">Homepage</span>
          <span className="navBarLink">Profile</span>
        </div>
        <div className="navBarIcons">
          <div className="navBarIcon">
            <PersonIcon />
            <div className="tag">
              <span className="iconTag">3</span>
            </div>
          </div>
          <div className="navBarIcon">
            <MessageIcon />
            <span className="iconTag">3</span>
          </div>
          <div className="navBarIcon">
            <SettingsIcon />
            <span className="iconTag">3</span>
          </div>
        </div>
        <div className="Pic">
          <img src="/images/profilePic.png" alt="" className="profilePicture" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
