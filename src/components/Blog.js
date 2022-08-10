import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Blog = ({ image, name, category, id }) => {
    return (
        <Wrapper className="col-lg-4 col-sm-6 mt-4">
            <div className="slider-single-post">
                <div className="slider-single-post__image">
                    <Link to={`/blog/${id}`}>
                        <img src={image} alt={name} className="img-fluid" />
                    </Link>
                </div>
                <div className="slider-single-post__content">
                    <h3 className="post-title">
                        <Link to={`/blog/${id}`}>
                            {name}
                        </Link>
                    </h3>
                    <div className="post-meta">
                        <p className="author-name">{category}</p>
                        <p className="post-date">30 Oct, 2019</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`

.slick-list {
  margin: 0 -10px;
}
.slick-slide > div {
  padding: 0 10px;
}
.slider-single-post {
  border: 1px solid #f5f5f5;
}
.slider-single-post__image a {
  display: block;
  width: 100%;
  position: relative;
}
.slider-single-post__image a:after {
  position: absolute;
  top: 50%;
  left: 50%;
          transform: translate(-50%, -50%);
  content: "";
  font-family: fontAwesome;
  color: #ffffff;
  background-color: #3a9943;
  width: 52px;
  height: 52px;
  line-height: 52px;
  border: 1px solid #3a9943;
  text-align: center;
  font-size: 23px;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
}
.slider-single-post__image a img {
  width: 100%;
  height:220px;
  object-fit:cover;
  transition: 0.6s;
}
.slider-single-post__image a:hover img {
  opacity: 0.7;
}
.slider-single-post__image a:hover:after {
  visibility: visible;
  opacity: 1;
}
.slider-single-post__content {
  padding: 12px 20px 15px 20px;
}
.slider-single-post__content .post-title {
    text-transform: capitalize;
  margin-bottom: 0;
}
.slider-single-post__content .post-title a {
  display: block;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 16px;
  color: #333;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
}
.slider-single-post__content .post-title a:hover {
  color: #3a9943;
}
.slider-single-post__content .post-meta .author-name {
  display: inline-block;
  margin: 0;
  color: #999999;
  font-size: 13px;
  position: relative;
  text-transform: capitalize;
  margin-right: 14px;
}
.slider-single-post__content .post-meta .author-name span {
  color: #333;
}
.slider-single-post__content .post-meta .author-name:after {
  content: "";
  width: 3px;
  height: 3px;
  background: #999999;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  right: -10px;
  margin-top: -1.5px;
}
.slider-single-post__content .post-meta .post-date {
  display: inline-block;
  color: #999999;
  font-size: 13px;
}`

export default Blog