import React, { useRef, useState } from "react";
import "../css/Intro.css";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../constants";

export default function Intro() {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();
  const handelVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handelVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize="30px" opacity="0.75"/>
          ) : (
            <BsFillPlayFill color="#fff" fontSize="30px" opacity="0.75"/>
          )}
        </div>
      </div>
    </div>
  );
}
