import React from 'react'
import { useFilterContext } from '../context/filter_context'
import ProductList from './ProductList'
import { getUniqueValues } from '../utils/helpers'
import styled from 'styled-components'
const AllCategory = () => {
    const {
        filters: {
            category,
        },
        updateFilters,
        all_products,
    } = useFilterContext()

    const categories = getUniqueValues(all_products, 'category')
    return (
        <Wrapper className='container'>
            <div className="row">
                <div className="col-lg-12 my-3">
                    <div className="section-title mb-2">
                        <h2>Latest Blogs</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={(e) => e.preventDefault()} >
                            <div className='form-control mb-3'>
                                <div className='product_tab_btn'>
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
                            <ProductList />
                        </form>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
.form-control{
    border:none;
    text-align:center;
}
.product_tab_btn button:hover {
    color: #3a9943;
    border:2px solid #3a9943;
}
.product_tab_btn button.active {
    color: #3a9943;
    border:2px solid #3a9943;
}
.product_tab_btn button {
    margin:3px;
    font-size: 15px;
    line-height: 28px;
    text-transform: uppercase;
    display: inline-block;
    font-weight: 500;
    border:2px solid transparent;
    padding: 0 20px;
    border-radius: 20px;
  }
}
`

export default AllCategory