import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import { Link } from 'react-router-dom';

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct
  } = useProductsContext();
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
    console.log(product);
  }, [id]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/")
      }, 3000)
    }
  }, [error]);

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product
  return (
    <>
      <div className="container">
        <PageHero title={name} product />
        <div className='section section-center page'>
          <Link to='/products' className='theme-button my-5'>
            back to products
          </Link>
          <div className=' product-center pb-4'>
            <div className="row">
              <div className="col-12 col-lg-6">
                <ProductImages images={images} />
              </div>
              <div className="col-12 col-lg-6">
                <section className='product-detail-content'>
                  <h2 className='product-details-title'>{name}</h2>
                  <Stars reviews={reviews} stars={stars} />
                  <h5 className='price discounted-price'> {formatPrice(price)}</h5>
                  <p className='product-short-desc'> {description}</p>
                  <div class="single-info">
                    <span class="title">Available:</span>
                    <span className='value'>{stock > 0 ? 'In stock' : 'out of stock'}</span>
                  </div>
                  <div class="single-info">
                    <span class="title">SKU:</span>
                    <span className='value'>  {sku}</span>
                  </div>
                  <div class="single-info pb-2">
                    <span class="title">Brand:</span>
                    <span className='value'>  {company}</span>
                  </div>
          
                  <hr />
                  {stock > 0 && <AddToCart product={product} />}
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default SingleProductPage
