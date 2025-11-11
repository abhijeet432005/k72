import React from "react";

const ProjectsCard = ({ image1, image2 }) => {
  return (
    <>
      <div className="w-full lg:w-1/2 h-full relative hover:rounded-3xl overflow-hidden transition-all group">
        <img className="w-full h-full object-cover" src={image1} alt="" />

        <div className="absolute w-full h-full top-0 left-0 group-hover:bg-black/10 flex justify-center items-center">
          <p className="text-white uppercase text-[4vw] leading-[4vw] pt-5 px-5 border-2 hidden group-hover:block rounded-full font-[font-2]">
            voir le projets
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-full relative hover:rounded-3xl overflow-hidden transition-all group">
        <img className="w-full h-full object-cover" src={image2} alt="" />

        <div className="absolute w-full h-full top-0 left-0 group-hover:bg-black/10 flex justify-center items-center">
          <p className="text-white uppercase text-[4vw] leading-[4vw] pt-5 px-5 border-2 hidden group-hover:block rounded-full font-[font-2]">
            voir le projets
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
