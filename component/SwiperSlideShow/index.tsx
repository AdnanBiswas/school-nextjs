import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className="slideSize slide1">
            <img src="/SchoolPhoto.jpg"></img>
          </div>
          <div className="carousel-caption d-none d-md-block">
            <h4>বার্ষিক শিক্ষক সম্মেলন ২০২২</h4>
            <p>স্থানঃ ডাঃ মঈনউদ্দিন আহমেদ(মন্টু) মিলনায়তন</p>
            <a href="#" className="btn btn-primary">আরও দেখুন</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slideSize slide2">
            <img src="/image2.jpg"></img>
          </div>
          <div className="carousel-caption d-none d-md-block">
            <h4>বার্ষিক শিক্ষক সম্মেলন ২০২২</h4>
            <p>স্থানঃ ডাঃ মঈনউদ্দিন আহমেদ(মন্টু) মিলনায়তন</p>
            <a href="#" className="btn btn-primary">আরও দেখুন</a>
          </div></SwiperSlide>

        <SwiperSlide><div className="slideSize slide3">
          <img src="/image3.jpg"></img>
        </div>
          <div className="carousel-caption d-none d-md-block">
            <h4>বার্ষিক শিক্ষক সম্মেলন ২০২২</h4>
            <p>স্থানঃ ডাঃ মঈনউদ্দিন আহমেদ(মন্টু) মিলনায়তন</p>
            <a href="#" className="btn btn-primary">আরও দেখুন</a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
