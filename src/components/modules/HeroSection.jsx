import React from "react";
import hero1 from "../../assets/images/hero-img-1.png";
import hero2 from "../../assets/images/hero-img-2.png";
import hero3 from "../../assets/images/hero-img-3.png";

function HeroSection() {
  return (
    <>
      <div className="paddingGlobal hero-section-top">
        <div className="container1">
          <div className="hero-section">
            <div className="heading section-tb">
              <h1>We are proud of our products</h1>
              <p className="para-large">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor <br />
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
              </p>
            </div>
            <div class="boxes">
              <div>
                <img className="img-fluid" src={hero1} alt="hero" />
              </div>
              <div>
                <img className="img-fluid" src={hero2} alt="hero" />
              </div>
              <div>
                <img className="img-fluid" src={hero3} alt="hero" />
              </div>
            </div>
            <div className="about section-tb">
              <h4>About Us</h4>
              <h2>We’re a team of data analysts</h2>
              <p className="para-large">
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
