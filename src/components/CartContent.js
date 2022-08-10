import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartTotals from './CartTotals'

const CartContent = () => {
  return (
    <Wrapper className='section section-center'>
      <div className="row">
        <div class="col-12 py-5">
          <form action="#">
            <div class="cart-table table-responsive mb-4">
              <CartColumns />
            </div>
          </form>
        </div>

        <div className='link-container'>
          <Link to='/products' className='theme-button my-3'>
            continue shopping
          </Link>
        </div>
      </div>
      <CartTotals />
    </Wrapper>
  )
}

const Wrapper = styled.section`

`
export default CartContent