import React from 'react'
import { useProductsContext } from '../context/products_context'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper';
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/autoplay';

import styled from 'styled-components'
const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext()
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <Wrapper>
      <div className='section'>
        <div className="product-single-row-slider-area mb-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="section-title mb-4">
                  <h2>Featured Products</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="product-single-row-slider-wrapper">
                  <Swiper
                    navigation
                    modules={[Navigation, Autoplay, EffectFade]}
                    autoplay
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                      350: {
                        slidesPerView: 1,
                      },
                      576: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      992: {
                        slidesPerView: 4,
                      }
                    }}>
                    <div className="row">
                      {featured.slice(0, 6).map((product) => {
                        return (
                          <div className="col-3">
                            <SwiperSlide key={product.id}>
                              <Product  {...product}  />
                            </SwiperSlide>
                          </div>
                        )
                      })}
                    </div>
                  </Swiper>
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
.swiper-button-next {
  background: #3a9943;
  font-size: 27px;
  color: var(--clr-white);
  right: 0%;
  top:7%;
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
  top:63%;
  padding: 20px;
  &::after {
      font-weight: 900;
      font-size: 16px;
      color: var(--clrwhite);
  }
}`


export default FeaturedProducts
