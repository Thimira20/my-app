import React from "react";
import "./LeftPane.css";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import BuildIcon from "@mui/icons-material/Build";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FlagIcon from "@mui/icons-material/Flag";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import GroupIcon from "@mui/icons-material/Group";

function LeftPane(props) {
  return (
    <div className="leftPaneBox">
      <div className="leftPaneContainer">
        <div className="leftPaneMenu">
          <li className="leftPaneMenuItem">
            <MarkUnreadChatAltIcon className="leftPaneMenuIcon" />
            <span className="leftPaneMenuText">Message</span>
          </li>
          <li className="leftPaneMenuItem">
            <GroupIcon className="leftPaneMenuIcon" />
            <span className="leftPaneMenuText">Groups</span>
          </li>
          <li className="leftPaneMenuItem">
            <RssFeedIcon className="leftPaneMenuIcon" />
            <span className="leftPaneMenuText">Feed</span>
          </li>
          <li className="leftPaneMenuItem">
            <FlagIcon className="leftPaneMenuIcon" />
            <span className="leftPaneMenuText">Pages</span>
          </li>
          <li className="leftPaneMenuItem">
            <CalendarMonthIcon className="leftPaneMenuIcon" />
            <span className="leftPaneMenuText">Events</span>
          </li>
          <li className="leftPaneMenuItem">
            <BuildIcon className="leftPaneMenuIcon" />
            <span className="leftPaneMenuText">Settings</span>
          </li>
          <li className="leftPaneMenuItem">
            <SportsEsportsIcon className="leftPaneMenuIcon" />
            <span className="leftPaneMenuText">Games</span>
          </li>
          <li className="leftPaneMenuItem">
            <NewspaperIcon className="leftPaneMenuIcon" />
            <span className="leftPaneMenuText">News</span>
          </li>
          <li className="leftPaneMenuItem">
            <WorkOutlineIcon className="leftPaneMenuIcon" />
            <span className="leftPaneMenuText">Jobs</span>
          </li>
          <li className="leftPaneMenuItem">
            <AddShoppingCartIcon className="leftPaneMenuIcon" />
            <span className="leftPaneMenuText">Market</span>
          </li>
          <hr />
          <div className="pagesYouLiked">
            <h3>Pages you liked</h3>
          </div>
          <div className="pageList">
            <li className="pageListItem">
              <img src="/images/profilePic.png" alt="" className="pagePic" />
              <span className="pageName">Vanta</span>
            </li>
            <li className="pageListItem">
              <img src="/images/profilePic.png" alt="" className="pagePic" />
              <span className="pageName">Vanta</span>
            </li>
            <li className="pageListItem">
              <img src="/images/profilePic.png" alt="" className="pagePic" />
              <span className="pageName">Vanta</span>
            </li>
            <li className="pageListItem">
              <img src="/images/profilePic.png" alt="" className="pagePic" />
              <span className="pageName">Vanta</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftPane;
