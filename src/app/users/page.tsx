'use client';

import React,{useEffect,useState} from 'react'
import { useRouter } from 'next/navigation'

import axiosJWTInterceptors from '../../utils/axiosIntercepotor';

const UserList = () => {
  const [data, setData] = useState([])
  
  const router = useRouter();

  useEffect(() => {
    const localStorageData = localStorage.getItem("tokenAuth");
    if (!localStorageData) {
      router.push('/auth/login');
    }
  }, []);


  useEffect(() => {
    const localStorageData = localStorage.getItem("tokenAuth");
    const getDataUserPagination = async () => {
      const accessToken = JSON.parse(localStorageData)?.access_token; 
      try {
        const res = await axiosJWTInterceptors.get(`http://localhost:4000/users`,  {
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
    getDataUserPagination();
  }, [])

  return (
    <div>
      <ul>
      {data.data?.map(item => (
          <li key={item?.id}>{item?.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList