import React from 'react'
import Button from './Button'
import styled from 'styled-components'
import bannerBig from '../assets/images/banner/banner-big1.webp'
const FullBannerArea = () => {
    return (
        <Wrapper>
            <div className="full-banner-area my-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-5 mb-5">
                            <div className="full-banner__content">
                                <h5>special offer</h5>
                                <h4>SUCCULENT GARDEN</h4>
                                <h3>GIFT BOXES</h3>
                                <p>From planter materials to style options, discover which planter is best for your space.</p>
                                <Button />
                            </div>
                        </div>

                        <div className="col-xl-8 col-lg-7 text-center text-lg-end">
                            <div className="full-banner__image">
                                <a href="shop-left-sidebar.html">
                                    <img width="694" height="424" src={bannerBig} className="img-fluid" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`

.full-banner__content h5 {
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 16px;
    color: #3a9943;
    font-weight: 400;
    line-height: 20px;
    text-transform: uppercase;
    margin-bottom: 15px;
  }
  .full-banner__content h4 {
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 29px;
    color: #333;
    font-weight: 400;
    line-height: 35px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .full-banner__content h4 {
      font-size: 30px;
      line-height: 30px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .full-banner__content h4 {
      font-size: 30px;
      line-height: 30px;
    }
  }
  @media only screen and (max-width: 767px) {
    .full-banner__content h4 {
      font-size: 30px;
      line-height: 30px;
    }
  }
  @media only screen and (max-width: 479px) {
    .full-banner__content h4 {
      font-size: 22px;
      line-height: 22px;
    }
  }
  .full-banner__content h3 {
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 55px;
    color: #333;
    font-weight: 500;
    line-height: 60px;
    margin-bottom:5px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .full-banner__content h3 {
      font-size: 50px;
      line-height: 50px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .full-banner__content h3 {
      font-size: 45px;
      line-height: 45px;
    }
  }
  @media only screen and (max-width: 767px) {
    .full-banner__content h3 {
      font-size: 45px;
      line-height: 45px;
    }
  }
  @media only screen and (max-width: 479px) {
    .full-banner__content h3 {
      font-size: 35px;
      line-height: 35px;
    }
  }
  .full-banner__content p {
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 16px;
    color: #666;
    font-weight: 300;
    line-height: 20px;
    margin-bottom: 40px;
  }
  .full-banner__content .banner-button {
    border-radius: 5px;
    padding: 0 20px;
  }
  @media only screen and (max-width: 479px) {
    .full-banner__content .banner-button {
      font-size: 12px;
      line-height: 40px;
      padding: 0 15px;
    }
  }
  .full-banner__image a {
    display: block;
    width: 100%;
  }
  .full-banner__image a img {
    -webkit-transition: 0.6s;
    transition: 0.6s;
    width: 100%;
  }
  .full-banner__image a:hover img {
    opacity: 0.7;
  }`
export default FullBannerArea