import React from 'react'
import { Breadcrumb } from 'antd'
import Link from 'next/link'

import FormRegistration from './component/FormRegistration'

const route = [
  {
    title: <Link href={"/"}>Home</Link>,
  },
  {
    title: "Register",
  },
]

const page = () => {
  return (
    <div className='container mx-auto px-4'>
      <Breadcrumb
        items={route}
        className='mb-5'
      />
      <FormRegistration/>
    </div>
  )
}

export default page