import { Route, Routes } from "react-router-dom"
import { About, BlogPage, CartPage, CheckoutPage, ErrorPage, Home, ProductsPage, SingleBlogPage, SingleProductPage } from "../pages"

const MyLayout = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<SingleProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<SingleBlogPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default MyLayout