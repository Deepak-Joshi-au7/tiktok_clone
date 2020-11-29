import React from "react";
import "./App.css";
import Video from "./components/vid/Video";
import videoData from "./media/sample.mp4";
function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url={videoData}
          channel="deepak10995"
          description="WOW this is so called react app"
          song="99 problems but REACT ain't one"
          likes={1000}
          messages={98}
          shares={99}
        />
        <Video
          url={videoData}
          channel="deepak1668"
          description="WOW this is another template"
          song="live life happily"
          likes={121}
          messages={24}
          shares={35}
        />
        <Video
          url={videoData}
          channel="deepak10995"
          description="WOW this is so called react app"
          song="99 problems but REACT ain't one"
          likes={1000}
          messages={98}
          shares={99}
        />
        <Video
          url={videoData}
          channel="deepak10995"
          description="WOW this is so called react app"
          song="99 problems but REACT ain't one"
          likes={10}
          messages={51}
          shares={1000}
        />
      </div>
      {/*app container */}
      {/*<videos/> */}
      {/*<videos/> */}
      {/*<videos/> */}
      {/*<videos/> */}
      {/*<videos/> */}
    </div>
  );
}

export default App;
