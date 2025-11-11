import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { NavContext } from "../../context/NavContext";
import { useNavigate } from "react-router-dom";

const FullScreenNav = () => {
  const colorChange = useRef(null);
  const stairRef = useRef(null);
  const fullNavLink = useRef(null);
  const [navOpen, setnavOpen] = useContext(NavContext);
  const fullScreen = useRef(null);
  const navigate = useNavigate()

  function gsapAnimation() {
    const tl = gsap.timeline();
    gsap.to(".fullscreennav", {
      scrollBehavior: "none"
    })
    tl.set(".fullscreennav", {
      display: "block",

    });
    tl.to(".stair", {
      height: "100%",
      stagger: {
        amount: -0.2,
      },

    });

    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });

    tl.to(".NavLinks", {
      opacity: 1,
    });
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".stair", {
      height: 0,
      stagger: {
        amount: 0.2,
      },
    });
    gsap.to(".NavLinks", {
      opacity: 0,
    });

    gsap.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });
    tl.set(".fullscreennav", {
      display: "none",
    });
  }

  useGSAP(() => {
    if (navOpen) {
      gsapAnimation();
    } else {
      gsapAnimationReverse();
    }
  }, [navOpen]);

  return (
    <div
      ref={fullScreen}
      id="fullscreennav"
      className="fullscreennav text-white w-full fixed top-0 left-0 z-99 hidden "
    >
      <div ref={stairRef} className="h-screen w-full fixed">
        <div className="h-screen w-full flex">
          <div className=" stair h-full w-1/5 bg-black"></div>
          <div className=" stair h-full w-1/5 bg-black"></div>
          <div className=" stair h-full w-1/5 bg-black"></div>
          <div className=" stair h-full w-1/5 bg-black"></div>
          <div className=" stair h-full w-1/5 bg-black"></div>
        </div>
      </div>

      <div ref={fullNavLink} className="relative">
        <div className="NavLinks fixed top-0 flex justify-between w-full items-start">
          <div className=" ">
            <div className="lg:w-[10vw] w-[14.4vh] p-3 ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                <path
                  fillRule="evenodd"
                  fill="white"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>

          <div
            ref={colorChange}
            onMouseMove={() => {
              colorChange.current.querySelectorAll("div").forEach((elem) => {
                elem.style.background = "#D2FD50";
              });
            }}
            onMouseLeave={() => {
              colorChange.current.querySelectorAll("div").forEach((elem) => {
                elem.style.background = "white";
              });
            }}
            className=" h-20 w-20 relative overflow-hidden m-3"
            onClick={() => setnavOpen(false)}
          >
            <div className="bg-white h-44 w-0.5 absolute -rotate-45 origin-top"></div>
            <div className="bg-white h-44 w-0.5 absolute right-0 rotate-45 origin-top"></div>
          </div>
        </div>

        {/* links */}

        <div className="lg:py-50 lg:mt-0 mt-80 ">

          {/* 1 */}
          <div onClick={() => {
            setTimeout(() => {
              navigate('/projects')
            }, 1000); setnavOpen(false)
          }} className="link origin-top border-t relative overflow-hidden">
            <h1 className="font-[font-2] text-[5.8vh] lg:text-[7vw] text-center leading-[0.9] lg:pt-6 pt-2 uppercase">
              Projects
            </h1>

            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center ">
                <h2 className='whitespace-nowrap font-[font-2] text-[5.8vh] lg:text-[7vw]  text-center leading-[1] lg:pt-6 pt-2 uppercase'>
                  Pour tout voir
                </h2>
                <img
                  className="lg:w-60 shrink-0 object-cover rounded-full h-10 w-30 lg:h-20"
                  src="assets/agence/PJC_SiteK72_Thumbnail_640x290.jpg"
                  alt=""
                />
                <h2 className='whitespace-nowrap font-[font-2] text-[5.8vh] lg:text-[7vw]  text-center leading-[1] lg:pt-6 pt-2 uppercase'>
                  Pour tout voir
                </h2>
                <img
                  className="lg:w-60 shrink-0 object-cover rounded-full h-10 w-30 lg:h-20"
                  src="assets/agence/WS---K72.ca---MenuThumbnail.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center ">
                <h2 className='whitespace-nowrap font-[font-2] text-[5.8vh] lg:text-[7vw]  text-center leading-[1] lg:pt-6 pt-2 uppercase'>
                  Pour tout voir
                </h2>
                <img
                  className="lg:w-60 shrink-0 object-cover rounded-full h-10 w-30 lg:h-20"
                  src="assets/agence/PJC_SiteK72_Thumbnail_640x290.jpg"
                  alt=""
                />
                <h2 className='whitespace-nowrap font-[font-2] text-[5.8vh] lg:text-[7vw]  text-center leading-[1] lg:pt-6 pt-2 uppercase'>
                  Pour tout voir
                </h2>
                <img
                  className="lg:w-60 shrink-0 object-cover rounded-full h-10 w-30 lg:h-20"
                  src="assets/agence/WS---K72.ca---MenuThumbnail.jpg"
                  alt=""
                />
              </div>



            </div>
          </div>

          {/* 2 */}

          <div onClick={() => {
            setTimeout(() => {
              navigate('/agence')
            }, 1000); setnavOpen(false)
          }} className="link origin-top border-t relative overflow-hidden">
            <h1 className="font-[font-2] text-[5.8vh] lg:text-[7vw] text-center leading-[0.9] lg:pt-6 pt-2 uppercase">
              agence
            </h1>

            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center gap-2">
                <h2 className="whitespace-nowrap font-[font-2] text-[5.8vh] lg:text-[7vw]  text-center leading-[1] lg:pt-6 pt-2 uppercase">
                  Pour tout saviour
                </h2>
                <img
                  className="lg:w-60 shrink-0 object-cover rounded-full h-10 w-30 lg:h-20"
                  style={{ objectPosition: "center 10%" }}
                  src="assets/agence/SophieA_480x640.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font-2] text-[5.8vh] lg:text-[7vw]  text-center leading-[1] lg:pt-6 pt-2 uppercase">
                  Pour tout saviour
                </h2>
                <img
                  className="lg:w-60 shrink-0 object-cover rounded-full h-10 w-30 lg:h-20"
                  src="assets/agence/blank_copie_2.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center gap-2">
                <h2 className="whitespace-nowrap font-[font-2] text-[5.8vh] lg:text-[7vw]  text-center leading-[1] lg:pt-6 pt-2 uppercase">
                  Pour tout saviour
                </h2>
                <img
                  className="lg:w-60 shrink-0 object-cover rounded-full h-10 w-30 lg:h-20"
                  style={{ objectPosition: "center 10%" }}
                  src="assets/agence/SophieA_480x640.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font-2] text-[5.8vh] lg:text-[7vw]  text-center leading-[1] lg:pt-6 pt-2 uppercase">
                  Pour tout saviour
                </h2>
                <img
                  className="lg:w-60 shrink-0 object-cover rounded-full h-10 w-30 lg:h-20"
                  src="assets/agence/blank_copie_2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* 3 */}

          <div className="link origin-top border-t relative overflow-hidden">
            <h1 className="font-[font-2] text-[5.8vh] lg:text-[7vw] text-center leading-[0.9] lg:pt-6 pt-2 uppercase">
              contact
            </h1>

            <div className="moveLink flex bg-[#D2FD50] absolute top-0 text-black">
              <div className="moveX flex items-center gap-2">
                <h2 className="whitespace-nowrap font-[font-2] text-[5.8vh] lg:text-[7vw]  text-center leading-[1] lg:pt-6 pt-2 uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="lg:w-60 shrink-0 object-cover rounded-full h-10 w-30 lg:h-20"
                  src="assets/agence/PJC_SiteK72_Thumbnail_640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font-2] text-[5.8vh] lg:text-[7vw]  text-center leading-[1] lg:pt-6 pt-2 uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="lg:w-60 shrink-0 object-cover rounded-full h-10 w-30 lg:h-20"
                  src="assets/agence/WS---K72.ca---MenuThumbnail.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center gap-2">
                <h2 className="whitespace-nowrap font-[font-2] text-[5.8vh] lg:text-[7vw]  text-center leading-[1] lg:pt-6 pt-2 uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="lg:w-60 shrink-0 object-cover rounded-full h-10 w-30 lg:h-20"
                  src="assets/agence/PJC_SiteK72_Thumbnail_640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font-2] text-[5.8vh] lg:text-[7vw]  text-center leading-[1] lg:pt-6 pt-2 uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="lg:w-60 shrink-0 object-cover rounded-full h-10 w-30 lg:h-20"
                  src="assets/agence/WS---K72.ca---MenuThumbnail.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="link origin-top border-y relative overflow-hidden">
            <h1 className="font-[font-2] text-[5.8vh] lg:text-[7vw] text-center leading-[0.9] lg:pt-6 pt-2 uppercase">
              blogue
            </h1>

            <div className="moveLink flex bg-[#D2FD50] absolute top-0 text-black">
              <div className="moveX flex items-center gap-2">
                <h2 className="whitespace-nowrap font-[font-2] text-[5.8vh] lg:text-[7vw]  text-center leading-[1] lg:pt-6 pt-2 uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="lg:w-60 shrink-0 object-cover rounded-full h-10 w-30 lg:h-20"
                  src="assets/agence/PJC_SiteK72_Thumbnail_640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font-2] text-[5.8vh] lg:text-[7vw]  text-center leading-[1] lg:pt-6 pt-2 uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="lg:w-60 shrink-0 object-cover rounded-full h-10 w-30 lg:h-20"
                  src="assets/agence/WS---K72.ca---MenuThumbnail.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center gap-2">
                <h2 className="whitespace-nowrap font-[font-2] text-[5.8vh] lg:text-[7vw]  text-center leading-[1] lg:pt-6 pt-2 uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="lg:w-60 shrink-0 object-cover rounded-full h-10 w-30 lg:h-20"
                  src="assets/agence/PJC_SiteK72_Thumbnail_640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font-2] text-[5.8vh] lg:text-[7vw]  text-center leading-[1] lg:pt-6 pt-2 uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="lg:w-60 shrink-0 object-cover rounded-full h-10 w-30 lg:h-20"
                  src="assets/agence/WS---K72.ca---MenuThumbnail.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
