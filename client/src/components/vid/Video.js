import React, { useRef, useState } from "react";
import "./video.css";

import VideoFooter from "../vidFooter/VideoFooter";
import VideoSidebar from "../vidSidebar/VideoSidebar";

function Video(props) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    // if video is playing then stop it
    // else play it.
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video__player"
        onClick={handleVideoPress}
        loop
        ref={videoRef}
        src={props.url}
      ></video>
      <VideoFooter
        channel={props.channel}
        description={props.description}
        song={props.song}
      />
      <VideoSidebar
        likes={props.likes}
        messages={props.messages}
        shares={props.shares}
      />
    </div>
  );
}

export default Video;
