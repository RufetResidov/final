import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import { Link } from 'react-router-dom'

const BlogPage = ({ title }) => {
    return (
        <main>
            <PageHero title='blog' />
            <Wrapper className='page'>
                <div className='empty'>
                    <h2>Blog Page</h2>
                </div>
            </Wrapper>
        </main>
    )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`
export default BlogPage
