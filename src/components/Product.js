import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import { FiEye, FiHeart, FiShoppingBag, } from 'react-icons/fi';
import discount from '../assets/images/discount/green-discount-label.webp'
const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <div className='section-center featured'>
        <div className="single-slider-product-wrapper">
          <div className="single-slider-product">
            <div className="single-slider-product__image">
              <Link to={`/products/${id}`}>
                <img src={image} className="img-fluid" alt="" />
                <img src={image} className="img-fluid" alt="" />
              </Link>
              <span className="discount-label discount-label--green" style={{
                backgroundImage: `url(${discount})`
              }}>-10%</span>
              <div className="hover-icons">
                <ul>
                  <li><a href="#"><FiHeart /></a></li>
                  <li><a href="#"><FiShoppingBag /></a></li>
                  <li><a href="#"><FiEye /></a></li>
                </ul>
              </div>
            </div>
            <div className="single-slider-product__content">
              <p className="product-title"><a href="single-product.html">{name}</a></p>

              <p className="product-price"><span className="discounted-price">$100.00</span> <span
                className="main-price discounted">${formatPrice(price)}</span></p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.product-single-row-slider-wrapper--border-bottom {
  border-bottom: 1px solid #EDEDED;
  padding-bottom: 40px;
}
.product-single-row-slider-wrapper .slick-list {
  margin-left: -10px;
  margin-right: -10px;
}
.product-single-row-slider-wrapper .slick-slide {
  margin: 0 10px;
}.single-slider-product {
  -webkit-transition: 0.6s;
  transition: 0.6s;
}
.single-slider-product__image {
  position: relative;
}
.single-slider-product__image > a {
  display: block;
  width: 100%;
}
.single-slider-product__image > a img {
  width: 100%;
  height:200px;
  transition: 0.6s;
}
.single-slider-product__image > a img:nth-child(1) {
  visibility: visible;
  opacity: 1;
}
.single-slider-product__image > a img:nth-child(2) {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  opacity: 0;
}
.single-slider-product:hover .single-slider-product__image > a img:nth-child(2) {
  visibility: visible;
  opacity: 1;
}
.product-title a:hover {
  color: #3a9943;
}
.discount-label {
  position: absolute;
  top: 20px;
  left: 20px;
  right: auto;
  background-repeat: no-repeat;
  background-position: left center;
  color: #ffffff;
  width: 60px;
  height: 25px;
  padding-left: 10px;
  line-height: 21px;
  font-size: 12px;
  font-weight: 600;
}
.single-slider-product__content {
  background: transparent;
  text-align: left;
  overflow: hidden;
  position: relative;
  padding: 17px 20px 16px 20px;
  border: 1px solid #f0f0f0;
  border-top: 0;
}
.product-price .discounted-price {
  margin-right: 10px;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 16px;
  color: #3a9943;
  font-weight: 700;
  line-height: 22px;
}
.product-price .main-price.discounted {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 13px;
  color: #868686;
  font-weight: 300;
  line-height: 18px;
  text-decoration: line-through;
}
product-title a {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 15px;
  color: #333;
  font-weight: 400;
  line-height: 20px;
  font-family: "Montserrat", sans-serif;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.hover-icons {
  position: absolute;
  bottom: 15px;
  right: 0;
  padding: 5px;
  background: #ffffff;
  border-radius: 25px;
  visibility: hidden;
  opacity: 0;
  transition: 0.6s;
}
.hover-icons ul li {
  padding: 5px;
}
.hover-icons ul li a {
  font-weight: 400;
  text-align: center;
  border-radius: 100%;
  transition: 0.6s;
}
.hover-icons ul li a svg {
  width: 20px;
  height: 20px;
  line-height: 20px;
  padding: 0;
  font-size: 16px;
  color: #333;
}


`
export default Product
