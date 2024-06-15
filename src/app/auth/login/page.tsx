import React from 'react'
import FormLogin from './component/FormLogin'
import { Breadcrumb } from 'antd'
import Link from 'next/link'

const route = [
  {
    title: <Link href={"/"}>Home</Link>,
  },
  {
    title: "Login",
  },
]

const page = () => {
  return (
    <div className='container mx-auto px-4'>
      <Breadcrumb
        items={route}
        className='mb-5'
      />
      <FormLogin/>
    </div>
  )
}

export default page