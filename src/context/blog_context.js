import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/blog_reducer'
import { blogs_url as url } from '../utils/constants'
import {
    GET_BLOG_BEGIN,
    GET_BLOG_SUCCESS,
    GET_BLOG_ERROR,
    GET_SINGLE_BLOG_BEGIN,
    GET_SINGLE_BLOG_SUCCESS,
    GET_SINGLE_BLOG_ERROR,
} from '../actions'

const initialState = {
    blogs_error: false,
    blogs_loading: false,
    blogs: [],
    single_blog_loading: false,
    single_blog_error: false,
    single_blog: {},
}

const BlogsContext = React.createContext()

export const BlogsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    const fetchBlogs = async (url) => {
        dispatch({ type: GET_BLOG_BEGIN })
        try {
            const response = await axios.get(url)
            const blogs = response.data
            dispatch({ type: GET_BLOG_SUCCESS, payload: blogs })
        } catch (error) {
            dispatch({ type: GET_BLOG_ERROR })
        }
    }

    const fetchSingleBlog = async (url) => {
        dispatch({ type: GET_SINGLE_BLOG_BEGIN })
        try {
            const response = await axios.get(url)
            const singleBlog = response.data
            dispatch({ type: GET_SINGLE_BLOG_SUCCESS, payload: singleBlog })
        } catch (error) {
            dispatch({ type: GET_SINGLE_BLOG_ERROR })
        }
    }

    useEffect(() => {
        fetchBlogs(url)
    }, [])

    return (
        <BlogsContext.Provider
            value={{ ...state, fetchSingleBlog }}
        >
            {children}
        </BlogsContext.Provider>
    )
}
// make sure use
export const useBlogsContext = () => {
    return useContext(BlogsContext)
}
