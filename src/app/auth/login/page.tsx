'use client';
import React, {useEffect, useState} from 'react'
import FormLogin from './component/FormLogin'
import { Breadcrumb } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const route = [
  {
    title: <Link href={"/"}>Home</Link>,
  },
  {
    title: "Login",
  },
]

const Page = () => {
  const [isLogin, setIsLogin] = useState<Boolean>(false)
  const router = useRouter();

  useEffect(() => {
    const localStorageData = localStorage.getItem("tokenAuth");
    if (localStorageData) {
      router.push('/users');
    } 
  }, [isLogin])
  
  return (
    <div className='container mx-auto px-4'>
      <Breadcrumb
        items={route}
        className='mb-5'
      />
      <FormLogin setIsLogin={setIsLogin}/>
    </div>
  )
}

export default Page