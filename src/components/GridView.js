import React from 'react'
import Product from './Product'

const GridView = ({ products }) => {
  return (
    <div className='container'>
      <div className="row">
        {products.map((product) => {
          return (
            <div className='col-12 col-md-6 col-lg-4 col-xl-3'>
              <Product key={product.id} {...product} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default GridView
