import React from 'react'
import TopHeader from '../Header/TopHeader'
import Footer from '../Footer'

const Layout = ({children}) => {
  return (
    <div className='w-full bg-[#1e28320d] h-[60px]'>
        <TopHeader/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout