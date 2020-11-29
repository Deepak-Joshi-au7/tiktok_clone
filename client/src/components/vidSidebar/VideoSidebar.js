import React, { useState } from "react";
import "./videoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function VideoSidebar(props) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{liked ? props.likes + 1 : props.likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>{props.messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>{props.shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
