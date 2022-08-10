import React from 'react'
import { formatPrice } from '../utils/helpers'
import AmountButtons from './AmountButtons'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext()
  const increase = () => {
    toggleAmount(id, 'inc')
  }
  const decrease = () => {
    toggleAmount(id, 'dec')
  }
  return (
    <tr>
      <td class="pro-thumbnail">
        <Link to={`/products/${id}`}>
          <img src={image} alt={name} />
        </Link>
      </td>
      <td>
        <Link to={`/products/${id}`} className='pro-col-title'>
          <h5 className='pro-title'>{name}</h5>
          <p className='color'>
            color : <span style={{ background: color }}></span>
          </p>
        </Link>
      </td>
      <td>
        <h5 className='price'>{formatPrice(price)}</h5>
      </td>
      <td className='quantity'>
        <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      </td>
      <td>
        <h5 className='pro-subtotal'>{formatPrice(price * amount)}</h5>
      </td>
      <td>
        <button
          type='button'
          className='pro-remove'
          onClick={() => removeItem(id)}
        >
          <FaTrash />
        </button>
      </td>
    </tr >
  )
}


export default CartItem