import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import img from '../../assets/images/slider/slider-banner1.webp'
import { useProductsContext } from '../../context/products_context'
import Error from '../Error'
import Loading from '../Loading'
import Product from '../Product'
const NewProduct = () => {
    const {
        products_loading: loading,
        products_error: error,
        featured_products: featured,
    } = useProductsContext()
    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }
    return (
        <Wrapper>
            <div className="banner-double-row-slider-area mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title mb-20">
                                <h2>All Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-4 col-12 mb-4">
                            <div className="slider-banner">
                                <Link to='/products'>
                                    <img width="380" height="400" src={img} className="img-fluid" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12 mb-4">
                            <div className="product-double-row-slider-wrapper">
                                <div className="row">
                                    {featured.slice(0, 6).map((product) => {
                                        return (
                                            <div className="col-6 col-md-4 col-lg-4 mb-2">
                                                <Product  {...product} key={product.id} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
.slider-banner a {
    display: block;
    width: 100%;
  }
  .slider-banner a img {
    width: 100%;
    -webkit-transition: 0.6s;
    transition: 0.6s;
  }
  .slider-banner a:hover img {
    opacity: 0.7;
  }
  
  .page-sidebar-banner a {
    display: block;
    width: 100%;
  }
  .page-sidebar-banner a img {
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }
  .page-sidebar-banner a:hover img {
    opacity: 0.7;
  }
`
export default NewProduct