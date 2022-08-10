import React from 'react'
import BlogSection from '../components/BlogSection'
import { AllCategory, BannerArea, FeaturedProducts, FullBannerArea, NewProduct, Services, Subscribe } from '../components'
import DealDay from '../components/DealDay'
import HomeSlider from '../components/slider/HomeSlider'

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <BannerArea />
      <FeaturedProducts />
      <FullBannerArea />
      <NewProduct />
      <Services />
      <AllCategory />
      <DealDay />
      <BlogSection />
      <Subscribe />
    </div>
  )
}

export default Home