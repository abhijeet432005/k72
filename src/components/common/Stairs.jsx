import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const Stairs = ({ children }) => {
  const location = useLocation();
  const stairRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(stairRef.current, {
      display: "block",
      delay: -0.5,
    });

    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    }).to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });

    tl.to(stairRef.current, {
      display: "none",
    });

    tl.to(".stair", {
      y: "0%",
    });

    gsap.from(pageRef.current, {
      opacity: 0,
      // scale: 1.05,
      delay: 1,
    });
  }, [location.pathname]);
  return (
    <div key={location.pathname}>
      <div ref={stairRef} className="h-screen w-full fixed top-0 z-10 ">
        <div className="h-screen w-full flex">
          <div className=" stair h-full w-1/5 bg-black"></div>
          <div className=" stair h-full w-1/5 bg-black"></div>
          <div className=" stair h-full w-1/5 bg-black"></div>
          <div className=" stair h-full w-1/5 bg-black"></div>
          <div className=" stair h-full w-1/5 bg-black"></div>
        </div>
      </div>

      <div ref={pageRef}>{children}</div>
    </div>
  );
};

export default Stairs;
