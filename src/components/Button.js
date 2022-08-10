import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Button = () => {
    return (
        <Wrapper>
            <button className='theme-button'><Link to='/products'>Shop Now</Link></button>
        </Wrapper>
    )
}
const Wrapper = styled.div`
.theme-button {
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 16px;
    color: #ffffff;
    font-weight: 700;
    line-height: 50px;
    text-align: center;
    background-color: #3a9943;
    padding: 0 30px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    border: none;
    /*----------  outline style  ----------*/
  }
  .theme-button:hover {
    background-color: #333;
    color: #ffffff;
  }
  .theme-button--outline {
    background-color: #ffffff;
    color: #3a9943;
    border: 1px solid #3a9943;
  }
  .theme-button--outline:hover {
    background-color: #3a9943;
    color: #ffffff;
  }`
export default Button