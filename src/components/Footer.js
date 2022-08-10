import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, } from "react-icons/fa";
import { ImHeadphones } from "react-icons/im";
import { BsClockHistory } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
import { links, social } from '../utils/constants';
import styled from 'styled-components';
function Footer() {
  return (
    <Wrapper>
      <footer className="footer-area ">
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4 col-md-6 col-sm-6 mb-1">
                <div className="footer-widget mb-4">
                  <div className="footer-title mb-3">
                    <Link to="/" >
                      <img src={logo} alt="" className='img-fluid' />
                    </Link>
                  </div>
                  <div className="footer-about">
                    <div className="footer-contact mt-2">
                      <ul>
                        <li>
                          <span> Address: </span>
                          1418 Riverwood Drive, Suite 3245 Cottonwood,
                          CA 96052, United States
                        </li>
                        <li><span>Telephone:</span> (012) 800 456 789-987 </li>
                        <li><span>Email:</span> <a href="#">giftall@gmail.com</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="social-icon">
                    <ul>
                      {social.map(({ id, icon, url }) => {
                        return (
                          <li key={id}>
                            <Link to={url}>
                              {icon}
                            </Link>
                          </li>
                        )
                      })}

                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 mb-1">
                <div className="footer-widget mb-4">
                  <div className="footer-title mb-3">
                    <h4>Get Help</h4>
                  </div>
                  <div className="footer-content">
                    <ul>
                      {links.map(({ id, text, url }) => {
                        return (
                          <li key={id}>
                            <Link to={url}>
                              {text}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 mb-1">
                <div className="footer-widget mb-4">
                  <div className="footer-title mb-3">
                    <h4>Information</h4>
                  </div>
                  <div className="footer-content">
                    {links.map(({ id, text, url }) => {
                      return (
                        <li key={id}>
                          <Link to={url}>
                            {text}
                          </Link>
                        </li>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 mb-1">
                <div className="footer-widget">
                  <div className="footer-title mb-3">
                    <h4> Call Us 24/7 </h4>
                  </div>
                  <div className="footer-number">
                    <div className="footer-number-image">
                      <ImHeadphones />
                    </div>

                    <div className="footer-number-container">
                      <h6>+994-51-332-18-97</h6>
                    </div>
                  </div>
                  <div className="footer-details">
                    <p className="font-light">Awesome grocery store website template
                      Awesome grocery store website template</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <p className="font-sm mb-0">© <span className="text-brand"> GiftAll</span> All rights reserved.</p>
              </div>
              <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                <div className="hotline d-lg-inline-flex d-flex align-items-center">
                  <BsClockHistory />
                  <p>Working 8:00 - 22:00</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                <div className="hotline d-lg-inline-flex d-flex align-items-center" >
                  <a target="_blank" href="https://goo.gl/maps/yhGzV7RAqKowdohk9">
                    <IoLocationOutline />
                  </a>
                  <p>I'm here location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  )
}
const Wrapper = styled.div`
`

export default Footer;
