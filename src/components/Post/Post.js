import React from "react";
import "./post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ReplyIcon from "@mui/icons-material/Reply";

function Post(props) {
  return (
    <div className="post">
      <div className="postContainer">
        <div className="postTop">
          <img src="/images/post1.jfif" alt="" className="postImage" />
          <span className="postUserName">Thimira Navodya</span>
          <span className="postTime">10h ago</span>
        </div>
        <div className="postCenter">
          <div className="postCaption">Hello Nice world</div>
          <img src="/images/post1.jfif" alt="" className="postedImage" />
        </div>
        <div className="postBotttom">
          <div className="postBottomLeft">
            <ThumbUpIcon className="like" htmlColor="blue" />
            <FavoriteIcon className="like" htmlColor="red" />
            <span className="likeCount">thimira and 45 other</span>
          </div>
          <div className="postBottomRight">
            <CommentIcon className="comment" />
            <span className="commentCount">15 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
