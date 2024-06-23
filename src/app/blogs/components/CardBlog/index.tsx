'use client'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import { Card, Pagination } from 'antd';
import Cards from '../../../components/Cards'
import axiosJWTInterceptors from '../../../../utils/axiosIntercepotor';

interface TokenAuth {
  access_token: string;
}
const CardBlog = () => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(9)
  const [data, setData] = useState<any>({})
  useEffect(() => {
    const getDataPagination = async () => {
      const localStorageData = localStorage.getItem("tokenAuth");
      let accessToken: string | null = null;

      if (localStorageData) {
        try {
          const parsedData: TokenAuth = JSON.parse(localStorageData);
          accessToken = parsedData.access_token;
        } catch (error) {
          console.error("Failed to parse localStorageData", error);
        }
      }

      try {
        const res = await axiosJWTInterceptors.get(`http://103.175.218.12:4000/article/pagination?page=${page}&limit=${pageSize}`, {
          headers: {
            'api-key': '05f0b227-d216-4ba9-8c98-8be9b5e5c48b',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          }
        });
        setData(res.data);
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };

    getDataPagination();
  }, [page])
  
  const hancleClickPagination = (e:any) => {
    setPage(e)
  }
  return (
    <>
      <Cards data={data} isPaging={true} onChange={(e)=>hancleClickPagination(e)} more={false}/>
    </>
  )
}

export default CardBlog