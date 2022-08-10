import {
    GET_BLOG_BEGIN,
    GET_BLOG_SUCCESS,
    GET_BLOG_ERROR,
    GET_SINGLE_BLOG_BEGIN,
    GET_SINGLE_BLOG_SUCCESS,
    GET_SINGLE_BLOG_ERROR,
} from '../actions'

const blogs_reducer = (state, action) => {
    if (action.type === GET_BLOG_BEGIN) {
        return { ...state, blogs_loading: true }
    }
    if (action.type === GET_BLOG_SUCCESS) {
        return {
            ...state,
            blogs_loading: false,
            blogs: action.payload,
        }
    }
    if (action.type === GET_BLOG_ERROR) {
        return { ...state, blogs_loading: false, blogs_error: true }
    }
    if (action.type === GET_SINGLE_BLOG_BEGIN) {
        return {
            ...state,
            single_blog_loading: true,
            single_blog_error: false,
        }
    }
    if (action.type === GET_SINGLE_BLOG_SUCCESS) {
        return {
            ...state,
            single_blog_loading: false,
            single_blog: action.payload,
        }
    }
    if (action.type === GET_SINGLE_BLOG_ERROR) {
        return {
            ...state,
            single_blog_loading: false,
            single_blog_error: true,
        }
    }
    throw new Error(`No Matching "${action.type}" - action type`)
}

export default blogs_reducer
