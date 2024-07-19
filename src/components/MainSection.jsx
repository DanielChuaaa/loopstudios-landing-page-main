import React from "react";
import mainImgDesktop from "../images/desktop/image-interactive.jpg";
import mainImgMobile from "../images/mobile/image-interactive.jpg";

function MainSection() {
  return (
    <>
      <section>
        <div className="containerr">
          <div className="theVr">
            <div>
              <img src={mainImgDesktop} alt="mainImg" className="mainImg" />
            </div>
            <div className="textWrapper">
              <h2>the leader in interactive vr</h2>
              <p>
                Founded in 2011, Loopstudios has been producing world-class virtualy reality projects for some of the best compaines around the globe.
                Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainSection;
