import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { single_blogs_url as url } from '../utils/constants'
import {
  Loading,
  Error,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useBlogsContext } from '../context/blog_context'

const SingleBlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_blog_loading: loading,
    single_blog_error: error,
    single_blog: blog,
    fetchSingleBlog
  } = useBlogsContext();
  useEffect(() => {
    fetchSingleBlog(`${url}${id}`)
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
    description,
    category,
    images,
  } = blog
  return (
    <Wrapper>
      <PageHero title={name} blog />
      <div className='section section-center page'>
        <Link to='/blogs' className='btn'>
          back to blogs
        </Link>
        <div className=' product-center'>
          <section className='content'>
            <h2>{name}</h2>
            {/* <img src={images.find(0).url} alt={name} /> */}
            <p className='desc'> {description}</p>
            <p>{category}</p>
            <hr />
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleBlogPage
