import React from 'react'
import Button from '../Button'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper';
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/autoplay';

import { homeSlider } from '../../utils/constants'
import styled from 'styled-components';
const HomeSlider = () => {
  return (
    <Wrapper>
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation
        autoplay
        loop={true}
        spaceBetween={30}
        effect={"fade"}

      >
        <div className="hero-slider-area ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-slider-wrapper">
                  {
                    homeSlider.map((item) => {
                      const { small, bold, light, img, id } = item
                      return (
                        <SwiperSlide key={id}>
                          <div className="single-slider-item container">
                            <div className="hero-slider-item-wrapper hero-slider-bg-1" style={{
                              backgroundImage: `url(${img})`
                            }}>

                              <div className="hero-slider-content p-5">
                                <p className="slider-title slider-title--small">{small}</p>
                                <p className="slider-title slider-title--big-bold">{bold}</p>
                                <p className="slider-title slider-title--big-light">{light}</p>
                                <Button classname="hero-slider-button" />
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      )
                    })
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </Swiper>

    </Wrapper>
  )
}
const Wrapper = styled.div`

.hero-slider-wrapper .slick-active .hero-slider-content {
  overflow: hidden;
}
.hero-slider-wrapper .slick-active .hero-slider-content > *:nth-child(1) {
  animation-name: fadeInDown;
  animation-duration: 1.5s;
  animation-delay: 0.5s;
}
.hero-slider-wrapper .slick-active .hero-slider-content > *:nth-child(2) {
  animation-name: rollIn;
  animation-duration: 1.5s;
  animation-delay: 1s;
}
.hero-slider-wrapper .slick-active .hero-slider-content > *:nth-child(3) {
  animation-name: fadeInLeft;
  animation-duration: 1.5s;
  animation-delay: 1.5s;
}
.hero-slider-wrapper .slick-active .hero-slider-content > *:nth-child(4) {
  animation-name: fadeInDown;
  animation-duration: 1.5s;
  animation-delay: 2.5s;
}
.hero-slider-wrapper .slick-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  padding: 0 10px;
  border-radius: 50px;
}
.hero-slider-wrapper .slick-dots li {
  display: inline-block;
}
.hero-slider-wrapper .slick-dots li button {
  font-size: 0;
  background: none;
  border: none;
  padding: 0;
  width: 10px;
  height: 10px;
  margin-right: 10px;
  background-color: #d7d7d7;
  border-radius: 50%;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.hero-slider-wrapper .slick-dots li button:hover {
  background-color: #3a9943;
}
.hero-slider-wrapper .slick-dots li.slick-active button {
  background-color: #3a9943;
}
.hero-slider-wrapper .slick-dots li:last-child button {
  margin-right: 0;
}

.hero-slider-item-wrapper {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 570px;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.hero-slider-item-wrapper--minimal-height {
  height: 470px;
}
.hero-slider-item-wrapper--fullwidth {
  height: 700px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .hero-slider-item-wrapper--fullwidth {
    background-position-x: 50%;
  }
}
@media only screen and (max-width: 767px) {
  .hero-slider-item-wrapper--fullwidth {
    background-position-x: 25%;
  }
}
.hero-slider-item-wrapper--fullwidth--maxheight {
  height: 860px;
}
@media only screen and (min-width: 1200px) and (max-width: 1499px) {
  .hero-slider-item-wrapper--fullwidth--maxheight {
    height: 650px !important;
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1499px) {
  .hero-slider-item-wrapper {
    height: 450px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .hero-slider-item-wrapper {
    height: 450px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .hero-slider-item-wrapper {
    height: 450px;
    background-position-x: 50%;
  }
}
@media only screen and (max-width: 767px) {
  .hero-slider-item-wrapper {
    height: 400px;
    background-position-x: 15%;
  }
}
@media only screen and (max-width: 479px) {
  .hero-slider-item-wrapper {
    height: 350px;
    background-position-x: 30%;
  }
}

.hero-slider-content > * {
  animation-name: fadeInUp;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  animation-fill-mode: both;
}
.hero-slider-content p.slider-title--small {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 24px;
  color: #666;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 5px;
}
@media only screen and (max-width: 479px) {
  .hero-slider-content p.slider-title--small {
    font-size: 16px;
    line-height: 16px;
  }
}
.hero-slider-content p.slider-title--big-bold {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 60px;
  color: #333;
  font-weight: 600;
  line-height: 60px;
  margin-bottom: 5px;
}
@media only screen and (min-width: 1200px) and (max-width: 1499px) {
  .hero-slider-content p.slider-title--big-bold {
    font-size: 50px;
    line-height: 50px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .hero-slider-content p.slider-title--big-bold {
    font-size: 50px;
    line-height: 50px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .hero-slider-content p.slider-title--big-bold {
    font-size: 40px;
    line-height: 40px;
  }
}
@media only screen and (max-width: 767px) {
  .hero-slider-content p.slider-title--big-bold {
    font-size: 40px;
    line-height: 40px;
  }
}
@media only screen and (max-width: 479px) {
  .hero-slider-content p.slider-title--big-bold {
    font-size: 30px;
    line-height: 30px;
  }
}
.hero-slider-content p.slider-title--big-light {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 60px;
  color: #333;
  font-weight: 400;
  line-height: 60px;
  margin-bottom: 35px;
}
@media only screen and (min-width: 1200px) and (max-width: 1499px) {
  .hero-slider-content p.slider-title--big-light {
    font-size: 50px;
    line-height: 50px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .hero-slider-content p.slider-title--big-light {
    font-size: 50px;
    line-height: 50px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .hero-slider-content p.slider-title--big-light {
    font-size: 40px;
    line-height: 40px;
  }
}
@media only screen and (max-width: 767px) {
  .hero-slider-content p.slider-title--big-light {
    font-size: 40px;
    line-height: 40px;
  }
}
@media only screen and (max-width: 479px) {
  .hero-slider-content p.slider-title--big-light {
    font-size: 30px;
    line-height: 30px;
  }
}
.hero-slider-content .hero-slider-button {
  border-radius: 5px;
  padding: 0 25px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .hero-slider-content .hero-slider-button {
    padding: 0 15px;
    font-size: 14px;
    line-height: 40px;
  }
}
@media only screen and (max-width: 767px) {
  .hero-slider-content .hero-slider-button {
    padding: 0 15px;
    font-size: 14px;
    line-height: 40px;
  }
}
@media only screen and (max-width: 479px) {
  .hero-slider-content .hero-slider-button {
    padding: 0 15px;
    font-size: 12px;
    line-height: 40px;
  }
}


.swiper-button-next {
  background: #3a9943;
  font-size: 27px;
  color: var(--clr-white);
  right: 0%;
  padding: 20px;
  &::after {
      font-weight: 900;
      font-size: 16px;
      color: var(--clrwhite);
  }
}
.swiper-button-prev {
  background: #3a9943;
  font-size: 27px;
  color: var(--clr-white);
  left: 0%;
  padding: 20px;
  &::after {
      font-weight: 900;
      font-size: 16px;
      color: var(--clrwhite);
  }
}
`
export default HomeSlider