import React from "react";
import "./StyleFormat.css";
import { DownloadFormat } from "../../Svg";
import { bytesToSize } from "../../constants";
import axios from "axios";

const apiUrl = import.meta.env.VITE_URL + "/api";
import { useDispatch, useSelector } from "react-redux";
import { downloadStatus } from "../../redux/actions";
function Format({ data }) {
  const dispatch = useDispatch();
  const { downloadStatus: status } = useSelector(
    (state) => state.getDownloadStatus
  );

  const toggleVideo = async (contentLength) => {
    console.log("Video Download Btn Clicked");
    dispatch(downloadStatus(true));
    const Obj = {
      contentLength: contentLength,
      duration: data?.videoInfo?.duration,
      link: data?.videoInfo?.link,
      socketId: localStorage.getItem("socketId"),
    };

    try {
      const response = await axios.post(apiUrl + "/video", Obj, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: "video/x-matroska" })
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `${data?.videoInfo?.title ?? "download"}.mkv`
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading video:", error);
    }
  };

  const toggleAudio = async (info) => {
    console.log("Audio Download Btn Clicked");
    dispatch(downloadStatus(true));
    const Obj = {
      contentLength: info.contentLength,
      duration: data?.videoInfo?.duration,
      link: data?.videoInfo?.link,
      audioBitrate: info.audioBitrate,
      socketId: localStorage.getItem("socketId"),
    };

    try {
      const response = await axios.post(apiUrl + "/audio", Obj, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: "audio/mp3" })
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `${data?.videoInfo?.title ?? "download"}.mp3`
      );
      document.body.appendChild(link);
      link.click();

      link.remove();
    } catch (error) {
      console.error("Error downloading video:", error);
    }
  };

  return (
    <div className="Format">
      <div className="main row">
        <div className="details">
          <p>Resolution</p>
          <p>FileSize</p>
        </div>
        <div className="download"></div>
      </div>
      <div className="alllist">
        {data?.videoFormats?.map((item, index) => (
          <div className="list row" key={index}>
            <div className="details">
              <p>{item?.quality}</p>
              <p>{bytesToSize(item?.contentLength ?? "")}</p>
            </div>
            <div className="download">
              <button
                onClick={() => {
                  !status && toggleVideo(item?.contentLength);
                }}
              >
                {" "}
                <DownloadFormat fill={"#00CED1"} width={20} height={20} />{" "}
                <p className="btn-text">Download</p>
              </button>
            </div>
          </div>
        ))}
        {data?.audioFormats?.map((item, index) => (
          <div className="list row" key={index}>
            <div className="details">
              <p>mp3</p>
              <p>{bytesToSize(item?.contentLength ?? "")}</p>
            </div>
            <div className="download">
              <button
                onClick={() => {
                  !status && toggleAudio(item);
                }}
              >
                {" "}
                <DownloadFormat fill={"#00CED1"} width={20} height={20} />{" "}
                <p className="btn-text">Download</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Format;
