import React from "react";

import "swiper/css";
import Slider1 from "../common/Slider1";

function SectionB() {
  return (
    <>
      <div className="paddingGlobal sliderSection">
        <div className="containerLarge sectionTb">
          <div className="content">
            <div className="titleWrapper">
            <h2 className="textLarge fcPrimary fw700">Read more posts</h2>
            </div>
            <Slider1/>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionB;
