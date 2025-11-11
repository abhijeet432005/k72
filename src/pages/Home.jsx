import React from "react";
import Video from "../components/Home/Video";
import HomeTop from "../components/Home/HomeTop";
import Homebottom from "../components/Home/Homebottom";


const Home = () => {
  return (
    <div className="h-screen">
      <div className="w-screen h-screen fixed">
        <Video />
      </div>

      <div className="h-full w-full relative flex flex-col justify-between">
        <HomeTop />
        <Homebottom />
      </div>
    </div>
  );
};

export default Home;
