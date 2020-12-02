import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./components/vid/Video";
import videoData from "./media/sample.mp4";
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("v2/posts");
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  }, []);
  console.log(videos);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((props) => {
          return (
            <Video
              url={videoData}
              channel={props.channel}
              description={props.description}
              song={props.song}
              likes={props.likes}
              messages={props.messages}
              shares={props.shares}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
