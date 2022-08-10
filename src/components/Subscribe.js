import React from 'react'
import styled from 'styled-components'
import newsLetter from '../assets/images/banner/newsletter1.webp'
const Subscribe = () => {
  return (
    <Wrapper>
      <div className="newsletter-area mb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="newsletter-wrapper newsletter-bg-1" style={{
                backgroundImage: `url(${newsLetter})`
              }}>
                <div className="newsletter-wrapper__text">
                  <h5>Subscribe newsletter to get updated</h5>
                  <p>We’ll never share your email address with a third-party.</p>
                </div>
                <div className="newsletter-wrapper__form">
                  <form
                    action='https://formspree.io/f/xoqrodpy'
                    method='POST'
                    id="mc-form" className="mc-form" noValidate={true}
                  >
                    <div className="rounded_input">
                      <input
                        type='email'
                        className='form-control'
                        placeholder='Enter your Email Address'
                        name='_replyto'
                      />
                    </div>

                    <button type="submit" title="Subscribe" className="btn btn-default" name="submit" value="Submit">
                      subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`

.newsletter-wrapper {
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  padding: 40px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .newsletter-wrapper {
            flex-direction: column;
            align-items: start;
  }
}
@media only screen and (max-width: 767px) {
  .newsletter-wrapper {
            flex-direction: column;
            align-items: start;
  }
}
@media only screen and (max-width: 479px) {
  .newsletter-wrapper {
    padding: 40px 20px;
  }
}
.newsletter-wrapper__text {
      flex-basis: 50%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .newsletter-wrapper__text {
    width: 100%;
    margin-bottom: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .newsletter-wrapper__text {
    width: 100%;
    margin-bottom: 20px;
  }
}
.newsletter-wrapper__text h5 {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 24px;
  color: #ffffff;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 8px;
  font-family: "Montserrat", sans-serif;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .newsletter-wrapper__text h5 {
    font-size: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .newsletter-wrapper__text h5 {
    font-size: 22px;
    line-height: 26px;
  }
}
@media only screen and (max-width: 575px) {
  .newsletter-wrapper__text h5 {
    font-size: 18px;
    line-height: 24px;
  }
}
.newsletter-wrapper__text p {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 16px;
  color: #ffffff;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 0;
}
@media only screen and (max-width: 575px) {
  .newsletter-wrapper__text p {
    font-size: 14px;
    line-height: 20px;
  }
}
.newsletter-wrapper__form {
  position: relative;
  -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .newsletter-wrapper__form {
    width: 80%;
  }
}
@media only screen and (max-width: 767px) {
  .newsletter-wrapper__form {
    width: 80%;
  }
}
@media only screen and (max-width: 575px) {
  .newsletter-wrapper__form {
    width: 90%;
  }
}
@media only screen and (max-width: 479px) {
  .newsletter-wrapper__form {
    width: 100%;
  }
}
.newsletter-wrapper__form form {
  position: relative;
}
.newsletter-wrapper__form form input[type=email] {
  display: inline-block;
  vertical-align: top;
  padding: 10px 15px;
  padding-right: 125px;
  line-height: 30px;
  height: 48px;
  color: #a9a9a9;
  font-size: 14px;
  width: 100%;
  border: 0;
  background: #fff;
  border-radius: 5px;
  text-align: left;
          box-shadow: none;
}
@media only screen and (max-width: 479px) {
  .newsletter-wrapper__form form input[type=email] {
    font-size: 12px;
    padding-right: 100px;
  }
}

.newsletter-wrapper__form form button {
  line-height: 48px;
  border: none;
  border-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 0 18px;
  font-size: 16px;
  max-width: 120px;
  color: #333;
  background: #ffdd20;
  font-weight: 700;
  position: absolute;
  text-transform: capitalize;
  right: -1px;
  top: 50%;
          transform: translateY(-50%);
  transition: 0.3s;
}
@media only screen and (max-width: 479px) {
  .newsletter-wrapper__form form button {
    max-width: 80px;
    font-size: 12px;
    padding: 0 10px;
  }
}
.newsletter-wrapper__form form button:hover {
  color: #fff;
}
.newsletter-wrapper__form .mailchimp-alerts {
  color: #ffffff;
}
.newsletter-bg-1 {
  background-color: #3a9943;
}
`

export default Subscribe
