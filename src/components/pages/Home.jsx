import React from "react";
import HeaderSection from "../modules/HeaderSection";
import HeroSection from "../modules/HeroSection";
import SectionA from "../modules/SectionA";
import SectionB from "../modules/SectionB";
import SectionC from "../modules/SectionC";
import SectionD from "../modules/SectionD";
import SectionE from "../modules/SectionE";
import FooterSection from "../modules/FooterSection";

function Home() {
  return (
    <>
      <div className="gradiatBackgrond">
        <HeaderSection />
        <HeroSection />
      </div>
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
      <FooterSection />
    </>
  );
}

export default Home;
