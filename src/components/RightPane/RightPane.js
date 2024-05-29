import React from "react";
import "./Rightpane.css";
import CakeIcon from "@mui/icons-material/Cake";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function RightPane(props) {
  return (
    <div className="rightPaneBox">
      <div className="rightpaneContainer">
        <div className="adConatiner">
          <span className="sponsered">Sponsered</span>
          <img src="/images/ad.jpg" alt="" className="sponceredImg" />
          <span className="addText">
            Latest BMW car BMW i8 now you can preorder it
          </span>
        </div>
        <div className="birthdayContainer">
          <CakeIcon htmlColor="pink" className="giftIcon" />
          <span className="birthdayText">
            <b>Kasun lakmal</b> and <b>2 others</b> having birthday today
          </span>
        </div>
        <div className="friendList">
          <li className="onlineFriend">
            <div className="onlineFriendContainer">
              <img
                src="/images/profilePIc.png"
                alt=""
                className="onlineFrienIMg"
              />
              <span className="onlineStatus"></span>
            </div>
            <span className="friendName">Jonny since</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendContainer">
              <img
                src="/images/profilePIc.png"
                alt=""
                className="onlineFrienIMg"
              />
              <span className="onlineStatus"></span>
            </div>
            <span className="friendName">Jonny since</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendContainer">
              <img
                src="/images/profilePIc.png"
                alt=""
                className="onlineFrienIMg"
              />
              <span className="onlineStatus"></span>
            </div>
            <span className="friendName">Jonny since</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendContainer">
              <img
                src="/images/profilePIc.png"
                alt=""
                className="onlineFrienIMg"
              />
              <span className="onlineStatus"></span>
            </div>
            <span className="friendName">Jonny since</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendContainer">
              <img
                src="/images/profilePIc.png"
                alt=""
                className="onlineFrienIMg"
              />
              <span className="onlineStatus"></span>
            </div>
            <span className="friendName">Jonny since</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendContainer">
              <img
                src="/images/profilePIc.png"
                alt=""
                className="onlineFrienIMg"
              />
              <span className="onlineStatus"></span>
            </div>
            <span className="friendName">Jonny since</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendContainer">
              <img
                src="/images/profilePIc.png"
                alt=""
                className="onlineFrienIMg"
              />
              <span className="onlineStatus"></span>
            </div>
            <span className="friendName">Jonny since</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendContainer">
              <img
                src="/images/profilePIc.png"
                alt=""
                className="onlineFrienIMg"
              />
              <span className="onlineStatus"></span>
            </div>
            <span className="friendName">Jonny since</span>
          </li>
        </div>
      </div>
    </div>
  );
}

export default RightPane;
