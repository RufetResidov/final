import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { formatPrice } from '../utils/helpers'

const CartTotals = () => {
  const { total_amount, shipping_fee, clearCart } = useCartContext()
  return (
    <Wrapper>
      <div>
        <div class="cart-summary pb-5">
          <div class="cart-summary-wrap">
            <h4>Cart Summary</h4>
            <p>Sub Total <span>{formatPrice(total_amount)}</span></p>
            <p>Shipping free <span>{formatPrice(shipping_fee)}</span></p>
            <h2>Order Total {' '}<span>{formatPrice(total_amount + shipping_fee)}</span></h2>
          </div>
          <div class="cart-summary-button">
            <button class="checkout-btn">Checkout</button>
            <button class="update-btn"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-1);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  *-- Cart Summary --*/
.cart-summary {
  float: right;
  max-width: 410px;
  width: 100%;
  margin-left: auto;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .cart-summary {
    margin-left: 0;
  }
}
@media only screen and (max-width: 767px) {
  .cart-summary {
    margin-left: 0;
  }
}
.cart-summary .cart-summary-wrap {
  background-color: #f2f2f2;
  padding: 45px 50px;
  margin-bottom: 20px;
}
@media only screen and (max-width: 575px) {
  .cart-summary .cart-summary-wrap {
    padding: 25px 30px;
  }
}
.cart-summary .cart-summary-wrap h4 {
  font-size: 20px;
  line-height: 23px;
  text-decoration: underline;
  text-transform: capitalize;
  font-weight: 700;
  margin-bottom: 30px;
}
.cart-summary .cart-summary-wrap p {
  font-size: 14px;
  font-weight: 500;
  line-height: 23px;
  color: #333333;
}
.cart-summary .cart-summary-wrap p span {
  float: right;
}
.cart-summary .cart-summary-wrap h2 {
  border-top: 1px solid #999999;
  padding-top: 9px;
  font-size: 18px;
  line-height: 23px;
  font-weight: 700;
  color: #000000;
  margin: 0;
}
.cart-summary .cart-summary-wrap h2 span {
  float: right;
}
.cart-summary .cart-summary-button {
  overflow: hidden;
  width: 100%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .cart-summary .cart-summary-button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: flex-start;
  }
}
@media only screen and (max-width: 767px) {
  .cart-summary .cart-summary-button {
    display: flex;
  justify-content: flex-start;
  }
}
.cart-summary .cart-summary-button button {
  margin-top: 10px;
  width: 140px;
  border-radius: 0;
  height: 36px;
  border: 1px solid #999999;
  line-height: 24px;
  padding: 5px 20px;
  color: #333333;
  background-color: transparent;
  margin-left: 20px;
  float: right;
}
.cart-summary .cart-summary-button button:last-child {
  margin-left: 0;
}
.cart-summary .cart-summary-button button:hover {
  background-color: #3a9943;
  border-color: #3a9943;
  color: #ffffff;
}
.cart-summary .cart-summary-button button.checkout-btn {
  font-weight: 400;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #333333;
  border-color: #333333;
  border-radius: 3px;
}
.cart-summary .cart-summary-button button.checkout-btn:hover {
  background-color: #3a9943;
  border-color: #3a9943;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .cart-summary .cart-summary-button button {
    margin-left: 0;
    margin-right: 20px;
  }
  .cart-summary .cart-summary-button button:last-child {
    margin-right: 0;
  }
}
@media only screen and (max-width: 767px) {
  .cart-summary .cart-summary-button button {
    margin-left: 0;
    margin-right: 10px;
  }
  .cart-summary .cart-summary-button button:last-child {
    margin-right: 0;
  }
}
@media only screen and (max-width: 575px) {
  .cart-summary .cart-summary-button button {
    width: 130px;
  }
}
`

export default CartTotals