import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import image1 from '../assets/images/banner/banner1.webp'
import image2 from '../assets/images/banner/banner2.webp'
const BannerArea = () => {
  return (
    <Wrapper>
      <div className="split-banner-area my-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-2">
              <div className="single-split-banner">
                <div className="single-split-banner__image">
                  <img width="100%" height="260" src={image1} className="img-fluid" alt="" />
                  <div className="single-split-banner__image__content">
                    <p className="split-banner-title split-banner-title--light">New Arrivals</p>
                    <p className="split-banner-title split-banner-title--bold">House Plants</p>
                    <p className='split-banner-title split-banner-title--price'>
                      <Link className='amount' to='/products'>Shop Now</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <div className="single-split-banner">
                <div className="single-split-banner__image">
                  <img width="100%" height="260" src={image2} className="img-fluid" alt="" />
                  <div className="single-split-banner__image__content">
                    <p className="split-banner-title split-banner-title--light">New Arrivals</p>
                    <p className="split-banner-title split-banner-title--bold">House Plants</p>
                    <p className='split-banner-title split-banner-title--price'>
                      <Link className='amount' to='/products'>Shop Now</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.single-split-banner__image {
  position: relative;
}
.single-split-banner__image a {
  display: block;
  width: 100%;
}
.single-split-banner__image a img {
  transition: 0.6s;
  width: 100%;
}
.single-split-banner__image a:hover img {
  opacity: 0.7;
}
.single-split-banner__image__content {
  position: absolute;
  top: 50%;
          transform: translateY(-50%);
  padding-left: 40px;
}
.single-split-banner__image__content p {
  margin-bottom: 0;
}
.single-split-banner__image__content p.split-banner-title--light {
  font-size: 20px;
  color: #666;
  font-weight: 300;
  line-height: 20px;
  margin-bottom: 5px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single-split-banner__image__content p.split-banner-title--light {
    font-size: 16px;
    line-height: 16px;
  }
}
@media only screen and (max-width: 479px) {
  .single-split-banner__image__content p.split-banner-title--light {
    font-size: 16px;
    line-height: 16px;
  }
}
.single-split-banner__image__content p.split-banner-title--bold {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 28px;
  color: #333;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 15px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single-split-banner__image__content p.split-banner-title--bold {
    font-size: 22px;
    line-height: 22px;
  }
}
@media only screen and (max-width: 479px) {
  .single-split-banner__image__content p.split-banner-title--bold {
    font-size: 22px;
    line-height: 22px;
  }
}
.single-split-banner__image__content p.split-banner-title--bold--small {
  font-size: 22px;
  line-height: 22px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single-split-banner__image__content p.split-banner-title--bold--small {
    font-size: 19px;
    line-height: 19px;
  }
}
@media only screen and (max-width: 479px) {
  .single-split-banner__image__content p.split-banner-title--bold--small {
    font-size: 19px;
    line-height: 19px;
  }
}
.single-split-banner__image__content p.split-banner-title--price {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 18px;
  color: #666;
  font-weight: 400;
  line-height: 18px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single-split-banner__image__content p.split-banner-title--price {
    font-size: 15px;
    line-height: 15px;
  }
}
@media only screen and (max-width: 479px) {
  .single-split-banner__image__content p.split-banner-title--price {
    font-size: 15px;
    line-height: 15px;
  }
}
.single-split-banner__image__content p.split-banner-title--price .amount {
  margin-top: 5px;
  display: block;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 24px;
  color: #3a9943;
  font-weight: 600;
  line-height: 24px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single-split-banner__image__content p.split-banner-title--price .amount {
    font-size: 18px;
    line-height: 18px;
  }
}
@media only screen and (max-width: 479px) {
  .single-split-banner__image__content p.split-banner-title--price .amount {
    font-size: 18px;
    line-height: 18px;
  }
}
`

export default BannerArea