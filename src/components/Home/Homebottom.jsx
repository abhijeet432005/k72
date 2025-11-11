import React, { useEffect, useState } from "react";
import { BiGlobe } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

const Homebottom = () => {
  const [Time, setTime] = useState({
    hr: new Date().getHours(),
    min: new Date().getMinutes(),
    sec: new Date().getSeconds()
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime({
        hr: new Date().getHours(),
        min: new Date().getMinutes(),
        sec: new Date().getSeconds()
      })
    }, 1000);

    return () => clearInterval(interval)
  })
  return (
    <div className="font-[font-2] flex justify-center lg:justify-start items-end text-white gap-4 mb-3 ">

      <div className="lg:flex items-end gap-1.5 hidden w-70">
        <div>
          <BiGlobe className="text-[2.8vw]" />
        </div>
        <div className="pt-2">
          <p className="text-[1.4vw] uppercase">Monteral_{`${Time.hr} : ${Time.min} : ${Time.sec}`}</p>
        </div>
      </div>

      <NavLink to={'/projects'} className="uppercase text-[3vh] lg:text-[5.5vw] leading-[6vw] pt-1 lg:pt-3 px-1.5 ;g:px-5 -ml-3 border-2 rounded-full hover:text-[#f2ff87]">
        Projects
      </NavLink>
      <NavLink to={'/agence'} className="uppercase text-[3vh] lg:text-[5.5vw] leading-[6vw] pt-1 lg:pt-3 px-1.5 ;g:px-5  border-2 rounded-full hover:text-[#f2ff87]">
        agences
      </NavLink>

    </div>
  );
};

export default Homebottom;
