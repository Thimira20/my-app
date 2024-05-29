import React from "react";
import NavBar from "../../components/Navigation/NavBar.js";
import LeftPane from "../../components/LeftPane/LeftPane.js";
import PostPane from "../../components/PostPane/PostPane.js";
import RightPane from "../../components/RightPane/RightPane.js";
import "./home.css";
function Home(props) {
  return (
    <div>
      <NavBar />
      <div className="bottomContainer">
        <LeftPane />
        <PostPane />
        <RightPane />
      </div>
    </div>
  );
}

export default Home;
