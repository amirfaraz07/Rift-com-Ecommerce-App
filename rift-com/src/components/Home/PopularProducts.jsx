import React, { useEffect, useState } from 'react'
import Row from '../common/Row'
import Container from '../common/Container'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
// import axios from 'axios'
import apiEndpoints from '../../apis/endpoint'
import client from '../../apis/index'

// three ways to use use effect 
// useEffect(() => {
//   // logic will be executed everytime a prop or state will update
// })
// useEffect( () => {
//   // it will only work before and after component mounted
// }, [] )
// useEffect(() => {
//   // adding on to (2) it will execute everytime the given args in dependency array will update
// }, [arg1, arg2, arg3])

const PopularProducts = () => {

  const [products, setProducts] = useState([])

  const getData = async () => {
    try {
      const response = client.get(apiEndpoints.products());
      setProducts((await response).data.docs)
    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect( () => {
    getData();
  }, [] );

  return (
    <Container>
        <Row className="justify-center my-[20px] uppercase">
          <h1 className='text-[30px] font-semibold text-[#1e2832]'>Popular Products</h1>
        </Row>
        <Row className='gap-[24px]'>
          <div className='h-[648px] w-[52px] relative'>
            <p className='text-[34px] h-full w-[648px] text-black -rotate-90 absolute text-center -z-[1]'>Explore new and popular styles</p>
          </div>
            <Link to={`/product-detail/${products[0]?._id}`}>
            <img className='w-[648px] h-[648px] object-cover cursor-pointer' src={products[0]?.img} alt="" />
            </Link>
            <Row className='flex-wrap gap-[24px] w-1/2'>
              { products.slice(1).map( (item, index) => (
              <Link to={`/product-detail/${item._id}`} className='w-[46%] h-[312px]' key={item._id}>
                <img className='w-[312px] h-full object-cover' src={item.img} alt={item.title} />
              </Link>))}
            </Row>
        </Row>
      </Container>
  )
}

export default PopularProducts