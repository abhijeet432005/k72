import React from "react";
import Video from "./Video";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HomeTop = () => {
  useGSAP(() => {
    let tl = gsap.timeline();

    tl.from(
      ".first",
      {
        y: -100,
        opacity: 0,
        duration: 1,
        delay: 2,
      },
      "-=.9"
    )
      .from(
        ".sec",
        {
          opacity: 0,
          y: -100,
          duration: 0.5,
        },
        "-=0.5"
      )
      .from(".third", {
        y: -100,
        opacity: 0,
        duration: 0.5,
      });
  });
  return (
    <div className="font-[font-1] lg:pt-5 mt-[35vh] lg:mt-0 text-center text-white ">
      <div className="first text-[5vh] lg:text-[9.5vw] leading-[6vh] lg:leading-[8vw] uppercase flex items-center justify-center">
        L'étincelle
      </div>

      <div className="sec text-[5vh] lg:text-[9.5vw] leading-[6vh] lg:leading-[8vw] uppercase flex items-center justify-center gap-3 ">
        qui
        <div className=" bg-red-200 h-[5vh] lg:h-[7.5vw] w-[13vh] lg:w-[15vw] rounded-full overflow-hidden lg:-mt-5 -mt-3">
          <Video />
        </div>
        génère
      </div>

      <div className="third text-[5vh] lg:text-[9.5vw] leading-[6vh] lg:leading-[8vw] uppercase flex items-center justify-center relative">
        la créativité
      </div>
    </div>
  );
};

export default HomeTop;
