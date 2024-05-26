'use client'
import React, {useEffect, useState} from 'react'
import CardBlog from './components/CardBlog'
import { Breadcrumb } from 'antd'
import Link from 'next/link'
import axios from 'axios'
import Cards from '../components/Cards'

import axiosJWTInterceptors from '../../utils/axiosIntercepotor';

const route = [
  {
    title: <Link href={"/"}>Home</Link>,
  },
  {
    title: "Blogs",
  },
]

const Blog = () => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(9)
  const [data, setData] = useState([])
 
  useEffect(() => {
    const getDataPagination = async () => {
      const accessToken = JSON.parse(localStorage.getItem("tokenAuth"))?.access_token; 
      console.log("🚀 ~ getDataPagination ~ accessToken:", accessToken)
      try {
        const res = await axiosJWTInterceptors.get(`http://localhost:4000/article/pagination?page=${page}&limit=${pageSize}`,  {
          headers: {
            'api-key': '05f0b227-d216-4ba9-8c98-8be9b5e5c48b',
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + accessToken
          }
        });
        setData(res.data)
      } catch (error) {
        console.error('Error posting data:', error);
      }
    }
    getDataPagination();
  }, [page])
  const hancleClickPagination = (e) => {
    setPage(e)
  }
  return (
    <div className='container mx-auto px-4'>
      <Breadcrumb
        items={route}
        className='mb-5'
      />
      <Cards data={data} isPaging={true} onChange={(e)=>hancleClickPagination(e)}/>
    </div>
  )
}

export default Blog