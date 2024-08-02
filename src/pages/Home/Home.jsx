import React, { useEffect } from "react";
import "./StyleHome.css";
import {
  Format,
  Heading,
  InputBox,
  Loading,
  Navbar,
  VideoInfo,
  MainBanner,
  Progress,
} from "../../components";
import { useSelector } from "react-redux";


function Home() {
  const { loading, data } = useSelector((state) => state.getFetchData);
  const { downloadStatus } = useSelector((state) => state.getDownloadStatus);



  return (
    <div className="Home">
      <Navbar />
      <Heading />
      <InputBox />
      {downloadStatus && <Progress />}
      {loading ? (
        <Loading />
      ) : data?.videoFormats?.length > 0 ? (
        <>
          <VideoInfo videoInfo={data?.videoInfo} />
          <Format data={data} />
        </>
      ) : (
        <MainBanner />
      )}
    </div>
  );
}

export default Home;
