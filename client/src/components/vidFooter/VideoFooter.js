import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
import discImage from "../../media/noun_disc_2673331.png";
function VideoFooter(props) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{props.channel}</h3>
        <p>{props.description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{props.song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img className="videoFooter__record" src={discImage} alt="disc ima" />
    </div>
  );
}

export default VideoFooter;
