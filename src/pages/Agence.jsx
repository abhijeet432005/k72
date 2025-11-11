import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { BiGlobe } from "react-icons/bi";
import { GiGlobe } from "react-icons/gi";
import Footer from "../components/footer/Footer";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const hoverRefs = useRef([]);
  const colorRefs = useRef([]);
  const imageHoverRef = useRef([]);

  const handleHover = (idx, enter) => {
    const hoverEl = hoverRefs.current[idx];
    const colorEl = colorRefs.current[idx];
    const imageEl = imageHoverRef.current[idx];

    if (!hoverEl || !colorEl || !imageEl) return;

    if (enter) {

      gsap.from(imageEl, {
        clipPath: "inset(0 100% 0 0",
      })
      hoverEl.style.height = "100%";
      colorEl
        .querySelectorAll(".text")
        .forEach((el) => (el.style.color = "black"));
      imageEl.style.display = "block";
      imageEl.style.transform = "translate(-50%, -50%) scale(1)";
      imageEl.style.opacity = "1";
    } else {
      hoverEl.style.height = "0%";
      colorEl
        .querySelectorAll(".text")
        .forEach((el) => (el.style.color = "white"));
      imageEl.style.display = "none";
      imageEl.style.transform = "translate(-50%, -50%) scale(0.95)";
      imageEl.style.opacity = "0";
      gsap.to(imageEl, {
        clipPath: "inset(0 0% 0 0)"
      })
    }
  };

  const PeopleArray = [
    {
      name: "Conseillère",
      work: "Sophie Auger",
      img: "src/assets/agence/SophieA_480x640.jpg",
    },
    {
      name: "Conceptrice-rédactrice",
      work: "Camille Brière",
      img: "src/assets/agence/CAMILLE_480X640_2.jpg",
    },
    {
      name: "Conseillère principale",
      work: "Stéphanie Brunelle",
      img: "src/assets/agence/blank.jpg",
    },
    {
      name: "VPP et directeur général",
      work: "Pierre-Luc Paiement",
      img: "src/assets/agence/PLP2_640x960.jpg",
    },
    {
      name: "Directrice artistique",
      work: "Mélanie Laviolette",
      img: "src/assets/agence/MEL_480X640.jpg",
    },
    {
      name: "Directrice de la stratégie",
      work: "Michèle Riendeau",
      img: "src/assets/agence/Michele_480X640.jpg",
    },
    {
      name: "Directrice conseil",
      work: "Meggie Lavoie",
      img: "src/assets/agence/MEGGIE_640X980_2.jpg",
    },
    {
      name: "Directeur artistique",
      work: "Alex Sauvageau",
      img: "src/assets/agence/blank.jpg",
    },
    {
      name: "Stratège",
      work: "Béatrice Roussin",
      img: "src/assets/agence/blank.jpg",
    },
    {
      name: "Conseillère",
      work: "Lou Gravel-Jean",
      img: "src/assets/agence/blank.jpg",
    },
    {
      name: "Planificateur stratégique principal",
      work: "Olivier Roeyaerts",
      img: "src/assets/agence/blank.jpg",
    },
    {
      name: "Conseillère",
      work: "Hélène Conti",
      img: "src/assets/agence/blank.jpg",
    },
    {
      name: "Coordonatrice",
      work: "Lawrence Meunier",
      img: "src/assets/agence/Lawrence_480x640.jpg",
    },
    {
      name: "Directrice principale",
      work: "Isabelle Beauchemin",
      img: "src/assets/agence/Isa_640X960.jpg",
    },
    {
      name: "Designer graphique",
      work: "Olivier Duclos",
      img: "src/assets/agence/Olivier_480x640.jpg",
    },
    {
      name: "Directeur de création adjoint",
      work: "Joël Letarte",
      img: "src/assets/agence/joel_480X640_3.jpg",
    },
    {
      name: "Directrice de création",
      work: "Chantal Gobeil",
      img: "src/assets/agence/ChantalG_480x640.jpg",
    },
    {
      name: "Directeur de création adjoint",
      work: "Sébastien Roy",
      img: "src/assets/agence/SebR_640X960.jpg",
    },
  ];

  const imageArray = [
    "src/assets/agence/Carl_480x640.jpg",
    "src/assets/agence/HugoJoseph_480x640.jpg",
    "src/assets/agence/joel_480X640_3.jpg",
    "src/assets/agence/Lawrence_480x640.jpg",
    "src/assets/agence/MEGGIE_480X640_2.jpg",
    "src/assets/agence/MEL_480X640.jpg",
    "src/assets/agence/Michele_480X640.jpg",
    "src/assets/agence/Olivier_480x640.jpg",
    "src/assets/agence/CAMILLE_480X640_2.jpg",
    "src/assets/agence/ChantalG_480x640.jpg",
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        invalidateOnRefresh: true,
        anticipatePin: 1,
        start: "top 30%",
        end: "+=850",
        scrub: 1,
        onUpdate: (elem) => {
          let imageIndex;

          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else imageIndex = imageArray.length - 1;

          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });

    gsap.to(".page-2", {
      backgroundColor: "black", // ✅ actual animation property
      color: "white",
      scrollTrigger: {
        trigger: ".page-2",
        start: "top top",
        toggleActions: "play none none reverse",
        // end: "bottom top",\
      },
    });

    const cards = gsap.utils.toArray(".card")

    cards.forEach((card, idx) => {
      if (idx < cards.length - 1) {
        const cardInner = card.querySelector(".card-inner");

        gsap.fromTo(cardInner, {
          y: "0%",
          z: 0,
          rotationX: 0
        }, {
          y: "-50%",
          z: -250,
          rotationX: 45,
          scrollTrigger: {
            trigger: cards[idx + 1],
            start: "top 80%",
            end: "top -75%",
            scrub: true,
            pin: card,
            pinSpacing: false
          }
        })

        gsap.to(cardInner, {
          "--after-opacity": 1,
          scrollTrigger: {
            trigger: cards[idx + 1],
            start: "top 75%",
            end: "top -25%",
            scrub: true
          }
        })

      }
    })


  });

  return (
    <div className="parent">
      <div className="page-1 py-1">
        <div
          ref={imageDivRef}
          className="lg:h-[20vw] lg:w-[15vw] w-[20vh] absolute lg:top-64 top-80 left-30 lg:left-[30vw]"
        >
          <img
            ref={imageRef}
            className="w-full h-full object-cover rounded-3xl"
            src="src/assets/agence/Carl_480x640.jpg"
          />
        </div>

        <div className="font-[font-2] relative ">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] uppercase leading-[17.5vw] text-center">
              Soixan7e <br />
              Douze
            </h1>
          </div>

          <div className="lg:pl-[40%] lg:mt-10 mt-20">
            <p className="text-2xl lg:text-5xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>

      <div className="page-2 w-full mt-35 lg:mt-25 font-[font-2]">

        {/* section - 1 */}
        <div className="pl-[10vw] pr-[15vw]">
          <div className="lg:w-[40%] flex justify-between ">
            <h1 className="lg:text-[1.5vw] text-[2vh]">Expertise</h1>
            <div>
              <ul className="lg:text-[1.5vw] text-[2vh]">
                <li>Stratégie</li>
                <li>Publicité</li>
                <li>Design </li>
                <li>Contenu</li>
              </ul>
            </div>
          </div>

          <div className="w-full flex justify-between gap-6 lg:gap-2 mt-15 text-xl flex-col lg:flex-row ">
            <h1 className="lg:w-1/3">
              Nos projets_ naissent dans l’humilité, grandissent dans la
              curiosité et vivent grâce à la créativité sous toutes ses formes.
            </h1>
            <h1 className="lg:w-1/3">
              Notre création_ bouillonne dans un environnement où le talent a le
              goût d’exploser. Où on se sent libre d’être la meilleure version
              de soi-même.
            </h1>
            <h1 className="lg:w-1/3">
              Notre culture_ c’est l’ouverture aux autres. Point. Tout
              l’équipage participe à bâtir une agence dont on est fiers.{" "}
            </h1>
          </div>
        </div>

        {/* section - 2 */}

        <div className="w-full mt-[25vw]">
          <div className="relative">
            <div className="flex justify-center z-10">
              <img
                src="src/assets/agence/MEL_480X640.jpg "
                className="rounded-2xl z-[10] lg:w-[35vw] w-[40vh]"
              />
            </div>

            <div className="absolute top-1/5 flex z-[5]">
              <div className="moveLeft flex items-end gap-[4vw] pl-[22vw] pr-[22vw]  whitespace-nowrap">
                <h1 className="text-[#d2fd50] font-[font-2] text-[10vw]  leading-[5vw]">
                  MÉLANIE
                </h1>
              </div>
              <div className="moveLeft flex items-end gap-[4vw] pl-[22vw] pr-[22vw]  whitespace-nowrap">
                <h1 className="text-[#D2FD50] font-[font-2] text-[10vw]  leading-[5vw]">
                  MÉLANIE
                </h1>
              </div>
            </div>

            <div className="absolute top-4/5 flex z-[20]">
              <div className="moveRight flex items-end gap-[4vw] pl-[22vw] pr-[22vw]  whitespace-nowrap">
                <h1 className="text-[#D2FD50] font-[font-2] text-[10vw]  leading-[5vw]">
                  LAVIOLETTE
                </h1>
                <p className="font-[font-2] text-[2vw] leading-[1vw] uppercase">
                  Directrice artistique
                </p>
              </div>
              <div className="moveRight flex items-end gap-[4vw] pl-[22vw] pr-[22vw] whitespace-nowrap">
                <h1 className="text-[#D2FD50] font-[font-2] text-[10vw]  leading-[5vw]">
                  LAVIOLETTE
                </h1>
                <p className="font-[font-2] text-[2vw] leading-[1vw] uppercase">
                  Directrice artistique
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:mt-[10vw] mt-30">
            <div className="flex justify-center z-10">
              <img
                src="src/assets/agence/Olivier_480x640.jpg"
                className="rounded-2xl z-[10] lg:w-[35vw] w-[40vh]"
              />
            </div>

            <div className="absolute top-1/5 flex z-[5]">
              <div className="moveLeft flex items-end gap-[4vw] pl-[22vw] pr-[22vw]  whitespace-nowrap">
                <h1 className="text-[#d2fd50] font-[font-2] text-[10vw] uppercase leading-[5vw]">
                  alex
                </h1>
              </div>
              <div className="moveLeft flex items-end gap-[4vw] pl-[22vw] pr-[22vw]  whitespace-nowrap">
                <h1 className="text-[#D2FD50] font-[font-2] text-[10vw] uppercase leading-[5vw]">
                  alex
                </h1>
              </div>
            </div>

            <div className="absolute top-4/5 flex z-[20]">
              <div className="moveRight flex items-end gap-[4vw] pl-[22vw] pr-[22vw]  whitespace-nowrap">
                <h1 className="text-[#D2FD50] font-[font-2] text-[10vw] uppercase leading-[5vw]">
                  sauvagwau
                </h1>
                <p className="font-[font-2] text-[2vw] leading-[1vw] uppercase">
                  art director
                </p>
              </div>
              <div className="moveRight flex items-end gap-[4vw] pl-[22vw] pr-[22vw] whitespace-nowrap">
                <h1 className="text-[#D2FD50] font-[font-2] text-[10vw] uppercase leading-[5vw]">
                  sauvagwau
                </h1>
                <p className="font-[font-2] text-[2vw] leading-[1vw] uppercase">
                  art director
                </p>
              </div>
            </div>
          </div>

          <div className="w-full mt-[20vh] lg:mt-[10vw] ">
            <div className="page-2 w-full mt-[8vw] flex flex-col">
              {PeopleArray.map((elem, idx) => (
                <div key={idx} className="relative">
                  <div
                    className="relative overflow-hidden border-y border-gray-300 z-[1] group cursor-pointer"
                    onMouseEnter={() => handleHover(idx, true)}
                    onMouseLeave={() => handleHover(idx, false)}
                  >
                    {/* Text Section */}
                    <div
                      ref={(el) => (colorRefs.current[idx] = el)}
                      className="flex justify-between items-start font-[font-2] uppercase relative z-10 transition-all duration-300"
                    >
                      <h1 className="p-3 text-sm sm:text-base md:text-[1vw]">
                        {elem.name}
                      </h1>
                      <h1 className="p-3 text-xl sm:text-2xl md:text-[2vw]">
                        {elem.work}
                      </h1>
                    </div>

                    {/* Hover background */}
                    <div
                      ref={(el) => (hoverRefs.current[idx] = el)}
                      className="absolute top-0 left-0 w-full h-0 bg-[#D2FD50] origin-top transition-all duration-300"
                    ></div>
                  </div>

                  {/* Hover Image */}
                  <div
                    ref={(el) => (imageHoverRef.current[idx] = el)}
                    className="absolute top-1/2 left-1/2 sm:right-[15vw] md:right-[20vw] lg:right-[25vw] 
                     w-[40vw] sm:w-[30vw] md:w-[25vw] lg:w-[20vw] opacity-0 
                     transition-opacity duration-500 pointer-events-none z-[5]"
                  >
                    <img
                      src={elem.img}
                      alt={elem.name}
                      className="w-full h-auto rounded-2xl object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* section - 3 */}

        <div className=" w-full mt-40 lg:mt-[15vw] stack flex justify-center">

          <div className="sticky-card">

            <div id="card-1" className="card">
              <div className="card-inner overflow-hidden ">
                <div className="absolute top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 text-center font-[font-2] w-full pointer-events-none">
                  <p className="text-[2vw]">Opto-Réseau</p>
                  <h1 className="text-[5vw]">On vous voit comme personne</h1>
                </div>
                <img src="src/assets/project image/thumbnailimage_opto.jpg" className="w-full h-full object-cover hover:scale-105 transition-all duration-150" alt="" />
              </div>
            </div>
            <div id="card-2" className="card">
              <div className="card-inner overflow-hidden ">
                <div className="absolute top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 text-center font-[font-2] w-full pointer-events-none">
                  <p className="text-[2vw]">Lamajeure</p>
                  <h1 className="text-[5vw]">Lamajeure</h1>
                </div>
                <img src="src/assets/project image/chalaxeur-thumbnail_img.jpg" className="w-full h-full object-cover hover:scale-105 transition-all duration-150" alt="" />
              </div>
            </div>
            <div id="card-3" className="card">
              <div className="card-inner overflow-hidden ">
                <div className="absolute top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 text-center font-[font-2] w-full pointer-events-none">
                  <p className="text-[2vw]">Lamajeure</p>
                  <h1 className="text-[5vw]">Lamajeure</h1>
                </div>
                <img src="src/assets/project image/Fruite_thumbnail_bbq.jpg" className="w-full h-full object-cover hover:scale-105 transition-all duration-150" alt="" />
              </div>
            </div>

            <div id="card-4" className="card bg-black">
              <div className="card-inner overflow-hidden ">
                <Footer />
              </div>
            </div>


          </div>



        </div>
      </div>

    </div>
  );
};

export default Agence;
