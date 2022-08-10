import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'
const Services = () => {
  return (
    <Wrapper>
      <div className="icon-feature-area mb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="icon-feature-wrapper">
                <div className="row mx-1">
                  {services.map((service) => {
                    const { id, icon, title, text } = service
                    return (
                      <div key={id} className="col-6 col-lg-3 col-sm-6">
                        <div className="single-icon-feature">
                          <div className="single-icon-feature__icon">
                            <img width="59" height="38" src={icon} className="img-fluid" alt="" />
                          </div>
                          <div className="single-icon-feature__content">
                            <p className="feature-title">{title}</p>
                            <p className="feature-text">{text}</p>
                          </div>
                        </div>
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

const Wrapper = styled.section`
.icon-feature-wrapper {
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  padding: 30px 0;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .icon-feature-wrapper {
    margin-top: -15px;
  }
}
@media only screen and (max-width: 767px) {
  .icon-feature-wrapper {
    margin-top: -15px;
  }
}
@media only screen and (max-width: 479px) {
  .icon-feature-wrapper .col-6 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%;
  }
}

.single-icon-feature {
  position: relative;
  padding: 10px 0;
  padding-left: 75px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single-icon-feature {
    margin-top: 15px;
  }
}
@media only screen and (max-width: 767px) {
  .single-icon-feature {
    margin-top: 15px;
  }
}
.single-icon-feature--product-details {
  padding-left: 50px;
}
.single-icon-feature__icon {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  left: 0;
}
.single-icon-feature__content p {
  margin-bottom: 0;
}
.single-icon-feature__content p.feature-title {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 14px;
  color: #3a9943;
  font-weight: 600;
  line-height: 18px;
  font-family: "Montserrat", sans-serif;
}
.single-icon-feature__content p.feature-text {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 14px;
  color: #666;
  font-weight: 300;
  line-height: 20px;
}
`
export default Services
