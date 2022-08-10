import React, { useState } from 'react'
import { FiHeart, FiMenu, FiShoppingBag, FiUser } from 'react-icons/fi';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
const Nav = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } = useAuth0();
  const [closeNav, setCloseNav] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  return (
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
                    <li onClick={loginWithRedirect}>
                      Login
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
      <div id="offcanvas-cart" className={cartActive ? ("offcanvas-cart cart-active ") : ("offcanvas-cart ")}>
        <div className="inner">
          <div className="head">
            <span className="title">Cart</span>
            <button className="offcanvas-close" onClick={() => setCartActive(!cartActive)}>
              x
            </button>
          </div>
          <div className="body customScroll">
            <ul className="minicart-product-list">
              <li>
                <Link className="image" to="/productdetail">
                  <img src="https://learts.thememove.com/wp-content/uploads/2018/11/product-1-600x800.jpg" alt="Cart product Image" />
                </Link>
                <div className="content">
                  <Link className="title" to="/productdetail">
                    Walnut Cutting Board
                  </Link>
                  <span className="quantity-price">1 x <span className="amount">$100.00</span></span>
                  <a href="#" className="remove">×</a>
                </div>
              </li>
              <li>
                <Link className="image" to="/productdetail">
                  <img src="https://learts.thememove.com/wp-content/uploads/2018/11/product-1-600x800.jpg" alt="Cart product Image" />
                </Link>
                <div className="content">
                  <Link className="title" to="/productdetail">
                    Walnut Cutting Board
                  </Link>
                  <span className="quantity-price">1 x <span className="amount">$100.00</span></span>
                  <a href="#" className="remove">×</a>
                </div>
              </li>

            </ul>
          </div>
          <div className="foot">
            <div className="sub-total">
              <strong>Subtotal :</strong>
              <span className="amount">$144.00</span>
            </div>
            <div className="buttons">
              <Link to="/cart" className='btns d-block mt-3 mb-2'>View Cart</Link>
              <Link to="/checkout" className='btns btns1 d-block mb-2'>checkout</Link>
            </div>
            <p className="minicart-message">Free Shipping on All Orders Over $59!</p>
          </div>
        </div>
      </div>
      <div className={cartActive ? ("offcanvas-overlay d-block") : ("offcanvas-overlay d-none")}></div>
      <div className={closeNav ? ("offcanvas-overlay d-block") : ("offcanvas-overlay d-none")}></div>
    </div>

  )
}



export default Nav
