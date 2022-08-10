import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
    return (
        <Wrapper className='page-100 py-5'>
            <section>
                <h1>404</h1>
                <h3>Sorry, the page you tried cannot be found</h3>
                <Link to='/' className='theme-button'>
                    back home
                </Link>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.main`
  background: var(--clr-primary-6);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
    color: var(--clr-grey-1);
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
    color: var(--clr-grey-1);
  }
}
`

export default ErrorPage
