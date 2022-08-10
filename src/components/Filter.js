import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext()

  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products, 'company')
  const colors = getUniqueValues(all_products, 'colors')

  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className='form-control'>
            <input
              type='text'
              name='text'
              placeholder='search product ...'
              className='search-input'
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end search input */}
          {/* categories */}
          <div className='form-control'>
            <h3 class="sidebar-widget-title  ms-2">CATEGORIES</h3>
            <div className='ms-2'>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type='button'
                    name='category'
                    className={`${category === c.toLowerCase() ? 'active' : null
                      }`}
                  >
                    {c}
                  </button>
                )
              })}
            </div>
          </div>
          {/* end of categories */}
          {/* companies */}
          <div className='form-control'>
            <h3 class="sidebar-widget-title  ms-2">COMPANY</h3>
            <div className='ms-2'>
              {companies.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type='button'
                    name='company'
                    className={`${company === c.toLowerCase() ? 'active' : null
                      }`}
                  >
                    {c}
                  </button>
                )
              })}
            </div>
          </div>
          {/* end of companies */}
          {/* 
          colors
          */}
          <div className='form-control'>
            <h3 className="sidebar-widget-title p-2 m-0">SELECT BY COLOR</h3>
            <div className='colors px-2'>
              {colors.map((c, index) => {
                if (c === 'all') {
                  return (
                    <button
                      key={index}
                      name='color'
                      onClick={updateFilters}
                      data-color='all'
                      className={`${color === 'all' ? 'all-btn active' : 'all-btn'
                        }`}
                    >
                      All
                    </button>
                  )
                }
                return (
                  <button
                    key={index}
                    name='color'
                    style={{ background: c }}
                    className={`${color === c ? 'color-btn active' : 'color-btn'
                      }`}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                )
              })}
            </div>
          </div>
          {/* 
end of           colors
          */}
          {/* price */}
          <div className='form-control'>
            <h3 className="sidebar-widget-title mb-3 mt-0">FILTER BY PRICE</h3>
            <p className='price'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              min={min_price}
              max={max_price}
              onChange={updateFilters}
              value={price}
            />
          </div>
          {/* end of price */}
          {/* shippping */}
          <div className='form-control shipping d-flex aling-items-center'>
            <label className="sidebar-widget-title mb-3 mt-0" htmlFor='shipping'> Free Shipping</label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
          {/* end of  shippping */}
        </form>
        <button type='button' className='clear-btn' onClick={clearFilters}>
          {' '}
          clear filters
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.sidebar-widget-title {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 16px;
  color: #333;
  font-weight: 600;
  line-height: 22px;
  margin: 15px 0 11px;
  font-family: "Montserrat", sans-serif;
}
input[type=range] {
  height: 25px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #EBEBEB;
  background: #3A9943;
  border-radius: 12px;
  border: 0px solid #F5F5F5;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #3A9943;
  border: 0px solid #F6861F;
  height: 19px;
  width: 19px;
  border-radius: 15px;
  background: #F6861F;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -6.5px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #3A9943;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #EBEBEB;
  background: #3A9943;
  border-radius: 12px;
  border: 0px solid #F5F5F5;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #3A9943;
  border: 0px solid #F6861F;
  height: 19px;
  width: 19px;
  border-radius: 15px;
  background: #F6861F;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #3A9943;
  border: 0px solid #F5F5F5;
  border-radius: 24px;
  box-shadow: 1px 1px 1px #EBEBEB;
}
input[type=range]::-ms-fill-upper {
  background: #3A9943;
  border: 0px solid #F5F5F5;
  border-radius: 24px;
  box-shadow: 1px 1px 1px #EBEBEB;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #3A9943;
  border: 0px solid #F6861F;
  height: 19px;
  width: 19px;
  border-radius: 15px;
  background: #F6861F;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #3A9943;
}
input[type=range]:focus::-ms-fill-upper {
  background: #3A9943;
}

  .form-control {
    margin-bottom: 1rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
   font-size:14;
   outline:none;
  }
  
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: #000;
    cursor: pointer;
  }
  .active {
    border-color: #3a9943;
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: #3a9943;
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters
