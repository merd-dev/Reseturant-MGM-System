import React, { useState } from "react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";

import { meal } from "../../constants/index.js";

import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVedio] = useState(false);
  const vidRef = React.useRef();

  const handleVedio = () => {
    setPlayVedio((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app-video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app-video-overlay flex__center">
        <div
          className="app-video-overlay-circle flex__center"
          onClick={handleVedio}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
