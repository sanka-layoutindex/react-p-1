import React from "react";
import sliderimg from "../../assets/images/owl-image.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css/navigation";

function Slider1() {
  return (
    <div className="slider1">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="card">
            <div className="img-box">
              <img className="img-fluid" src={sliderimg} alt="owl-image" />
            </div>
            <div className="card-body">
              <h6>How to Make Recurring Invoicing More Efficient</h6>
              <p className="para-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="img-box">
              <img className="img-fluid" src={sliderimg} alt="owl-image" />
            </div>
            <div className="card-body">
              <h6>How to Make Recurring Invoicing More Efficient</h6>
              <p className="para-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="img-box">
              <img className="img-fluid" src={sliderimg} alt="owl-image" />
            </div>
            <div className="card-body">
              <h6>How to Make Recurring Invoicing More Efficient</h6>
              <p className="para-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="img-box">
              <img className="img-fluid" src={sliderimg} alt="owl-image" />
            </div>
            <div className="card-body">
              <h6>How to Make Recurring Invoicing More Efficient</h6>
              <p className="para-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider1;
