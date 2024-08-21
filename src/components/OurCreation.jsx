import { useState, useEffect } from "react";
import imgDeepEarthDekstop from "../images/desktop/image-deep-earth.jpg";
import imgDeepEarthMobile from "../images/mobile/image-deep-earth.jpg";
import imgNightArcadeDekstop from "../images/desktop/image-night-arcade.jpg";
import imgNightArcadeMobile from "../images/mobile/image-night-arcade.jpg";
import imgSoccerTeamDesktop from "../images/desktop/image-soccer-team.jpg";
import imgSoccerTeamMobile from "../images/mobile/image-soccer-team.jpg";
import imgGridDesktop from "../images/desktop/image-grid.jpg";
import imgGridMobile from "../images/mobile/image-grid.jpg";
import imgFromAboveDesktop from "../images/desktop/image-from-above.jpg";
import imgFromAboveMobile from "../images/mobile/image-from-above.jpg";
import imgPocketBorealisDesktop from "../images/desktop/image-pocket-borealis.jpg";
import imgPocketBorealisMobile from "../images/mobile/image-pocket-borealis.jpg";
import imgCuriosityDesktop from "../images/desktop/image-curiosity.jpg";
import imgCuriosityMobile from "../images/mobile/image-curiosity.jpg";
import imgFisheyeDesktop from "../images/desktop/image-fisheye.jpg";
import imgFisheyeMobile from "../images/mobile/image-fisheye.jpg";

let data = [
  {
    index: 1,
    imgPC: imgDeepEarthDekstop,
    imgMobile: imgDeepEarthMobile,
    label: "Deep Earth",
  },
  {
    index: 2,
    imgPC: imgNightArcadeDekstop,
    imgMobile: imgNightArcadeMobile,
    label: "Night Arcade",
  },
  {
    index: 3,
    imgPC: imgSoccerTeamDesktop,
    imgMobile: imgSoccerTeamMobile,
    label: "Soccer Team VR",
  },
  {
    index: 4,
    imgPC: imgGridDesktop,
    imgMobile: imgGridMobile,
    label: "The Grid",
  },
  {
    index: 5,
    imgPC: imgFromAboveDesktop,
    imgMobile: imgFromAboveMobile,
    label: "From Up Above VR",
  },
  {
    index: 6,
    imgPC: imgPocketBorealisDesktop,
    imgMobile: imgPocketBorealisMobile,
    label: "Pocket Borealis",
  },
  {
    index: 7,
    imgPC: imgCuriosityDesktop,
    imgMobile: imgCuriosityMobile,
    label: "The Curiosity",
  },
  {
    index: 8,
    imgPC: imgFisheyeDesktop,
    imgMobile: imgFisheyeMobile,
    label: "Make It Fisheye",
  },
];

function OurCreation() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <>
      <section>
        <div className="containerr">
          <div className="ourCreationWrapper">
            <div className="ourCreationHeader">
              <h2>Our Creations</h2>
              <button className="ourCreationButtonPC">
                <a href="#"></a> See All
              </button>
            </div>
            <div className="imgWrapper">
              {data.map((item) => (
                <div className="imageParent" key={item.index}>
                  <img src={isMobile ? item.imgMobile : item.imgPC} alt={item.label} className="image" />
                  <h3>{item.label}</h3>
                </div>
              ))}
            </div>
            <div className="ourCreationButtonMobileParent">
              <button className="ourCreationButtonMobile">
                <a href="#"></a> See All
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurCreation;
