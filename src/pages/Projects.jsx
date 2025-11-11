import React from "react";
import ProjectsCard from "../components/Projects/ProjectsCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Footer from "../components/footer/Footer";

const Projects = () => {
  
  const imageArray = [
    {
      img1: "assets/project image/K72_article_ChatGPT_blogue.jpg",
      img2: "assets/project image/100temps_Thumbnail.jpg",
    },
    {
      img1: "assets/project image/BEST_site_menu_Thumbnail.jpg",
      img2: "assets/project image/CF_thumbnail.jpg",
    },
    {
      img1: "assets/project image/chalaxeur-thumbnail_img.jpg",
      img2: "assets/project image/crisis24_behance_1920X1200_cartes.jpg",
    },
    {
      img1: "assets/project image/Fruite_thumbnail_bbq.jpg",
      img2: "assets/project image/OKA_thumbnail.jpg",
    },
    {
      img1: "assets/project image/opto_thumbnail2.jpg",
      img2: "assets/project image/PJC_SiteK72_Thumbnail_640x290.jpg",
    },
    {
      img1: "assets/project image/PME-MTL_Thumbnail.jpg",
      img2: "assets/project image/thumbnailimage_opto.jpg",
    },
    // {
    //   img1: "src/assets/project image/thumbnailimage_atable2.jpg",
    //   img2: "src/assets/project image/thumbnailimage_opto.jpg",
    // },
    // {
    //   img1: "src/assets/project image/thumbnailimage_shelton.jpg",
    //   img2: "src/assets/project image/thumbnailimage_SollioAg.jpg",
    // },
    // {
    //   img1: "src/assets/project image/WS---K72.ca---MenuThumbnail.jpg",
    //   img2: "src/assets/project image/WS---K72.ca---Thumbnail.jpg",
    // },
  ];

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    ScrollTrigger.matchMedia({
      // 👉 For large screens only (>= 1024px)
      "(min-width: 1024px)": function () {
        gsap.from(".hero", {
          height: "100px",
          stagger: { amount: 0.6 },
          scrollTrigger: {
            trigger: ".main",
            start: "top 100%",
            end: "top -350%",
            scrub: true,
          },
        });
      },

      // 👉 Optional: reset or disable for small screens
      "(max-width: 1023px)": function () {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      },
    });
  });

  return (
    <>
      <div className="w-full h-screen ">
        <div className="mt-96 lg:mt-[30vw] p-3 ">
          <h1 className="font-[font-2] leading-[10vw] uppercase text-[10vh] lg:text-[14vw]">
            projets
          </h1>
        </div>

        <div className="main w-full p-3">
          {imageArray.map((elem, idx) => (
            <div className="hero mb-4 w-full h-[55vh] lg:h-[35vw] flex flex-col lg:flex-row gap-2" key={idx}>

              <ProjectsCard image1={elem.img1} image2={elem.img2}  />
            </div>
          ))}
        </div>

        <div id="card-4" className="bg-black text-white ">
          <div className="card-inner">

          <Footer />
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Projects;
