import React from 'react'
import BottomHeader from '../components/Header/BottomHeader';
import HeroSection from '../components/Home/HeroSection';
import PopularProducts from '../components/Home/PopularProducts';
import BestSellerProducts from '../components/Home/BestSellerProducts';
import Layout from '../components/common/Layout';

const Home = () => {
  return (
    <Layout>
      <BottomHeader />
      <HeroSection />
      <PopularProducts />
      <BestSellerProducts />
    </Layout>
  )
}

export default Home