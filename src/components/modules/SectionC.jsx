import React from "react";
import icon1 from "../../assets/images/Icon-1.svg";
import icon2 from "../../assets/images/icon-2.png";
import icon3 from "../../assets/images/icon-3.png";
import icon4 from "../../assets/images/Icon-4.svg";
import icon5 from "../../assets/images/icon-5.svg";
import icon6 from "../../assets/images/Icon-6.svg";

function SectionC() {
  return (
    <>
      <div className="paddingGlobal sectionC">
        <div className="containerLarge sectionBottom">
          <div className="heading">
            <div className="titleWrapper">
            <h2 className="fcPrimary fw700">Our corporate values</h2>
            </div>
            <p className="fcPrimary textNormal">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>
          <div className="services">
            <div className="boxes">
              <div className="card">
                <div className="img-box">
                  <img className="img-fluid" src={icon1} alt="icon" />
                </div>
                <div className="card-body">
                  <h6 className="fcPrimary fw700">Best in Class</h6>
                  <p className="textMedium fcPrimary">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="img-box">
                  <img className="img-fluid" src={icon2} alt="icon" />
                </div>
                <div className="card-body">
                  <h6 className="fcPrimary fw700">Authenticity</h6>
                  <p className="textMedium fcPrimary">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="img-box">
                  <img className="img-fluid" src={icon3} alt="icon" />
                </div>
                <div className="card-body">
                  <h6 className="fcPrimary fw700">Email Support</h6>
                  <p className="textMedium fcPrimary">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="img-box">
                  <img className="img-fluid" src={icon4} alt="icon" />
                </div>
                <div className="card-body">
                  <h6 className="fcPrimary fw700">Discounts Available</h6>
                  <p className="textMedium fcPrimary">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="img-box">
                  <img className="img-fluid" src={icon5} alt="icon" />
                </div>
                <div className="card-body">
                  <h6 className="fcPrimary fw700">Powerful Marketing</h6>
                  <p className="textMedium fcPrimary">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="img-box">
                  <img className="img-fluid" src={icon6} alt="icon" />
                </div>
                <div className="card-body">
                  <h6 className="fcPrimary fw700">Inventory management</h6>
                  <p className="textMedium fcPrimary">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionC;
