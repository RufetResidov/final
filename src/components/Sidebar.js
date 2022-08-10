import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box
} from '@chakra-ui/react'
import { FiHeart, FiMenu, FiShoppingBag, FiUser } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';
import logo from "../assets/logo.png"
import CartColumns from './CartColumns';
import CartIcon from './CartIcon';
const Sidebar = () => {
  const [closeNav, setCloseNav] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  return (
    <>
      <div className='header '>
        <div className="section-fluid">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <div className="header-logo">
                <Link to="/" >
                  <img src={logo} alt="" className='img-fluid' />
                </Link>
              </div>
            </div>
            <div className="col-auto">
              <div className="site-main-menu">
                <ul className="nav">
                  <li className="has-children">
                    <Link to="/">
                      <span className="menu-text">Home</span>
                    </Link>
                  </li>
                  <li className="has-children">
                    <Link to="/products">
                      <span className="menu-text">Product</span>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/productdetail"> <span className="menu-text">Product Detail</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <Link to="/blog">
                      <span className="menu-text">Blog</span>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/blogdetail"> <span className="menu-text">Blog Detail</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog"> <span className="menu-text">Blog</span>
                        </Link>
                      </li> </ul>
                  </li>
                  <li className="has-children">
                    <Link to="/about">
                      <span className="menu-text">About</span>
                    </Link>
                    <ul className='sub-menu'>
                      <li>
                        <Link to="/wishlist">
                          <span className="menu-text">wishlist</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/cart">
                          <span className="menu-text">cart</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <Link to="/contact">
                      <span className="menu-text">Contact</span>
                    </Link>
                    <ul className="sub-menu">
                      <Link to="/contact">
                        <span className="menu-text">Contact</span>
                      </Link>
                      <Link to="/checkout">
                        <span className="menu-text">checkout</span>
                      </Link>
                      <Link to="/faq">
                        <span className="menu-text">faq</span>
                      </Link>
                      <Link to="/login">
                        <span className="menu-text">login</span>
                      </Link>
                      <Link to="/register">
                        <span className="menu-text">register</span>
                      </Link>
                      <Link to="/lostpass">
                        <span className="menu-text">Lost</span>
                      </Link>
                      <Link to="/myaccount">
                        <span className="menu-text">myaccount</span>
                      </Link>

                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-tools justify-content-end d-flex align-items-center">
                <div className="header-login">
                  <FiUser />
                  <div className="profile-dropdown">
                    <ul>
                      <li>
                        <Link to="login">Login</Link>
                      </li>
                      <li>
                        <Link to="register">Register</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="header-wishlist">
                  <Link to="/wishlist">
                    <FiHeart />
                    <span className="wishlist-count">9</span>
                  </Link>
                </div>
                <div className="header-cart" onClick={() => setCartActive(!cartActive)}>
                  {
                    cartActive ? (
                      <Link to="/" >
                        <FiShoppingBag />
                        <span className="wishlist-count">31</span>
                      </Link>
                    ) :
                      (
                        <Link to="/" >
                          <FiShoppingBag />
                          <span className="wishlist-count">31</span>
                        </Link>
                      )
                  }
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="mobile-header sticky-header bg-white section d-xl-none my-3">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <div className="header-logo">
                <Link to="/">
                  <img src={logo} alt="" className='img-fluid' />
                </Link>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-tools justify-content-end">
                <div className="header-login d-none d-sm-block">
                  <FiUser />
                  <div className="profile-dropdown">
                    <ul>
                      <li>
                        <Link to="login">Login</Link>
                      </li>
                      <li>
                        <Link to="register">Register</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="header-wishlist d-none d-sm-block">
                  <Link to="/wishlist">
                    <FiHeart />
                    <span className="wishlist-count">9</span>
                  </Link>
                </div>
                <div className="header-cart" onClick={() => setCartActive(!cartActive)}>
                  {
                    cartActive ? (
                      <Link to="/" >
                        <FiShoppingBag />
                        <span className="wishlist-count">31</span>
                      </Link>
                    ) :
                      (
                        <Link to="/" >
                          <FiShoppingBag />
                          <span className="wishlist-count">31</span>
                        </Link>
                      )
                  }
                </div>
                <div className="mobile-menu-toggle " >
                  <button className='toggle onClose' onClick={() => setCloseNav(!closeNav)}>
                    <FiMenu />
                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div id="offcanvas-mobile-menu"
        className={closeNav ? ("offcanvas offcanvas-mobile-menu offcanvas-open") : ("offcanvas offcanvas-mobile-menu")}>
        <button className='toggle onClose' onClick={() => setCloseNav(!closeNav)}>
          {
            closeNav ?
              (
                <FaTimes />
              )
              :
              (
                <></>
              )
          }
        </button>
        <div className="inner customScroll">
          <div className="offcanvas-menu mb-5">
            <Accordion allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    <Link to="/">
                      <span className="menu-text">Home</span>
                    </Link>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Salam
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    <Link to="/">
                      <span className="menu-text">Home</span>
                    </Link>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Salam
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    <Link to="/">
                      <span className="menu-text">Home</span>
                    </Link>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Salam
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    <Link to="/">
                      <span className="menu-text">Home</span>
                    </Link>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Salam
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    <Link to="/">
                      <span className="menu-text">Home</span>
                    </Link>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Salam
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="header-tools">
            <div className="header-login">
              <a href="my-account.html">
                <FiUser />
              </a>
            </div>
            <div className="header-wishlist">
              <Link to="/">
                <FiHeart />
                <span className="wishlist-count">9</span>
              </Link>
            </div>
            <div className="header-cart">
              <Link to="/">
                <FiShoppingBag />
                <span className="wishlist-count">31</span>
              </Link>
            </div>

          </div>
        </div>
        <div className="offcanvas-social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      <div id="offcanvas-cart" className={cartActive ? ("offcanvas-cart  cart-active") : ("offcanvas-cart")}>
            <div className="inner">
                <div className="head">
                    <span className="title">Cart</span>
                    <button className="offcanvas-close" onClick={() => setCartActive(!cartActive)}>
                        x
                    </button>
                </div>
                <div className="body customScroll">
                  <CartIcon/>
                </div>
            </div>
        </div>
      <div className={cartActive ? ("offcanvas-overlay d-block") : ("offcanvas-overlay d-none")}></div>
      <div className={closeNav ? ("offcanvas-overlay d-block") : ("offcanvas-overlay d-none")}></div>
    </>
  )
}



export default Sidebar
