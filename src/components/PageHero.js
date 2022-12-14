import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title, product, blog }) => {
    return (
        <Wrapper>
            <section className="breadcrumb-section">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to='/'>Home /</Link>
                            {product && <Link to="/products"> Products /</Link>}
                            {blog && <Link to="/blogs"> Blogs /</Link>}
                            <span> {title}</span>
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.breadcrumb-section {
  padding: 3rem 0;
  background-color: var(--clr-grey-10);
  display: flex;
  text-align: center;
  position: relative;
  z-index: 0;
  .circles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      overflow: hidden;

      li {
          position: absolute;
          display: block;
          list-style: none;
          width: 20px;
          height: 20px;
          background-color: var(--clr-grey-4);
          animation: animate 25s linear infinite;
          bottom: -150px;
          opacity: 0.3 !important;
      }
      li:nth-child(1) {
          left: 25%;
          width: 80px;
          height: 80px;
          animation-delay: 0s;
      }
      li:nth-child(2) {
          left: 10%;
          width: 20px;
          height: 20px;
          animation-delay: 2s;
          animation-duration: 12s;
      }
      li:nth-child(3) {
          left: 70%;
          width: 20px;
          height: 20px;
          animation-delay: 4s;
      }
      li:nth-child(4) {
          left: 40%;
          width: 60px;
          height: 60px;
          animation-delay: 0s;
          animation-duration: 18s;
      }
      li:nth-child(5) {
          left: 65%;
          width: 20px;
          height: 20px;
          animation-delay: 0s;
      }
      li:nth-child(6) {
          left: 75%;
          width: 90px;
          height: 90px;
          animation-delay: 3s;
      }
      li:nth-child(7) {
          left: 19%;
          width: 110px;
          height: 110px;
          animation-delay: 7s;
      }
      li:nth-child(8) {
          left: 50%;
          width: 25px;
          height: 25px;
          animation-delay: 15s;
          animation-duration: 45s;
      }
      li:nth-child(9) {
          left: 20%;
          width: 15px;
          height: 15px;
          animation-delay: 2s;
          animation-duration: 35s;
      }
      li:nth-child(10) {
          left: 85%;
          width: 110px;
          height: 110px;
          animation-delay: 0s;
          animation-duration: 11s;
      }
      @-webkit-keyframes animate {
          0% {
              transform: translateY(0) rotate(0deg);
              opacity: 1;
              border-radius: 0;
          }
          100% {
              transform: translateY(-1000px) rotate(720deg);
              opacity: 0;
              border-radius: 50%;
          }
      }
      @keyframes animate {
          0% {
              transform: translateY(0) rotate(0deg);
              opacity: 1;
              border-radius: 0;
          }
          100% {
              transform: translateY(-1000px) rotate(720deg);
              opacity: 0;
              border-radius: 50%;
          }
      }
  }
  a,span {
      font-size: 1.2rem;
      color: var(--clr-black);
      font-weight: 600;
      text-transform:capitalize;
      &:hover {
          color: var(--clr-primary-1);
      }
  }
  @include responsive(576px) {
      padding: 2rem 0;
  }
}
`

export default PageHero
