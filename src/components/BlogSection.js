import React from 'react'
import styled from 'styled-components'
import { useBlogsContext } from '../context/blog_context'
import Blog from './Blog'
import Error from './Error'
import Loading from './Loading'
const BlogSection = () => {
	const {
		blogs_loading: loading,
		blogs_error: error,
		blogs
	} = useBlogsContext()
	if (loading) {
		return <Loading />
	}
	if (error) {
		return <Error />
	}
	return (
		<div className="pb-2 blog-section">
			<div className="blog-post-slider-area mb-4">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title mb-20">
								<h2>Latest Blogs</h2>
							</div>
						</div>
					</div>
					<div className="row">
						{blogs.slice(0, 3).map((product) => {
							return <Blog key={product.id} {...product} />
						})}
					</div>
				</div>
			</div>
		</div>
	)
}
export default BlogSection