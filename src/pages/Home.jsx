import React from "react";
import Video from "../components/Home/Video";
import HomeTop from "../components/Home/HomeTop";
import Homebottom from "../components/Home/Homebottom";


const Home = () => {
  return (
    <div className="">
      <div className="w-screen h-screen fixed">
        <Video />
      </div>

      <div className="-mb-[8.2vh] -lg:mb-0 h-screen w-full relative flex flex-col justify-between">
        <HomeTop />
        <Homebottom />
      </div>
    </div>
  );
};

export default Home;
