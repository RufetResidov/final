import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import CartItem from './CartItem'

const CartColumns = () => {
  const { cart } = useCartContext()
  return (
    <Wrapper>
      <table class="table">
        <thead>
          <tr>
            <th class="pro-thumbnail">Image</th>
            <th class="pro-title">Product</th>
            <th class="pro-price">Price</th>
            <th class="pro-quantity">Quantity</th>
            <th class="pro-subtotal">Total</th>
            <th class="pro-remove">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />
          })}
        </tbody>
      </table>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: none;
  @media (min-width: 776px) {
    display: block;
    .content {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      justify-items: center;
      column-gap: 1rem;
      h5 {
        color: var(--clr-grey-5);
        font-weight: 400;
      }
    }
    span {
      width: 2rem;
      height: 2rem;
    }
    hr {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  }
`

export default CartColumns