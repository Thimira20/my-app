import React from "react";
import SearchIcon from '@mui/icons-material/Search';

function NavBar() {
  return (
    <div className="navBarBox">
      <div className="navBarleft">
        <span className="logo">facebook</span>
      </div>

      <div className="navBarRight">
        <div className="searchBarBox">
          <SearchIcon className=" searchIcon" />
        </div>
      </div>s
      <div className="navBarCemter"></div>
    </div>
  );
}

export default NavBar;
