import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"
import App from './App';
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { ProductsProvider } from './context/products_context';
import { BlogsProvider } from './context/blog_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-04oz55xx.us.auth0.com"
        clientId="pmlALrAXh4hElpUivyXTm4CmGx1VJ9UM"
        redirectUri={window.location.origin}
      >
        <ChakraProvider>
          <ProductsProvider>
            <BlogsProvider>
              <FilterProvider>
                <CartProvider>
                  <App />
                </CartProvider>
              </FilterProvider>
            </BlogsProvider>
          </ProductsProvider>
        </ChakraProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

