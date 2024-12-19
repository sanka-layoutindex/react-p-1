import React from "react";
import hero1 from "../../assets/images/hero-img-1.png";
import hero2 from "../../assets/images/hero-img-2.png";
import hero3 from "../../assets/images/hero-img-3.png";

function HeroSection() {
  return (
    <>
      <div className="paddingGlobal heroSectionTop">
        <div className="containerLarge">
          <div className="HeroSection">
            <div className="heading sectionTb">
              <div className="titleWrapper">
              <h1 className="fcPrimary fw700">We are proud of our products</h1>
              </div>
              <p className="fcPrimary textMedium">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor <br />
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
              </p>
            </div>
            <div class="boxes">
              <div className="imageWrapper ratioImageWrapper ratio_1_1">
                <img className="img-fluid" src={hero1} alt="hero" />
              </div>
              <div className="imageWrapper ratioImageWrapper ratio_1_1">
                <img className="img-fluid" src={hero2} alt="hero" />
              </div>
              <div className="imageWrapper ratioImageWrapper ratio_1_1">
                <img className="img-fluid" src={hero3} alt="hero" />
              </div>
            </div>
            <div className="about sectionTb">
              <h3 className="fontGradiant fw700">About Us</h3>
              <div className="titleWrapper">
              <h2 className="fcPrimary fw700">We’re a team of data analysts</h2>
              </div>
              <p className="fcPrimary textMedium">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor <br />
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam
                <br />
                et justo duo dolores et ea rebum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
