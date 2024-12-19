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
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <div className="card">
            <div className="img-box ratioImageWrapper ratio_4_3">
              <img className="img-fluid" src={sliderimg} alt="owl-image" />
            </div>
            <div className="card-body">
              <h6 className="fcPrimary fw700">How to Make Recurring Invoicing More Efficient</h6>
              <p className="textNormal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="img-box ratioImageWrapper ratio_4_3">
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
            <div className="img-box ratioImageWrapper ratio_4_3">
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
            <div className="img-box ratioImageWrapper ratio_4_3">
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
