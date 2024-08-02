import React from "react";
import "./StyleVideoInfo.css";

import { formatDuration, formatViewCount } from "../../constants";

function VideoInfo({ videoInfo }) {
  return (
    <div className="VideoInfo">
      <div className="thumbnail">
        <img
          src={`https://i.ytimg.com/vi/${videoInfo?.videoId}/maxresdefault.jpg`}
          alt="thumbnail"
        />
      </div>
      <div className="details">
        <div className="row">
          <p className="title">{videoInfo?.title}</p>
        </div>
        <div className="row">
          <p className="bold">Duration : </p>
          <p>{formatDuration(videoInfo?.duration)}</p>
        </div>
        <div className="row">
          <p className="bold">Views Count : </p>
          <p>{formatViewCount(videoInfo?.viewCount)}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoInfo;
