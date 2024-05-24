import { Breadcrumb } from 'antd'
import Link from 'next/link'
import React from 'react'

const route = [
  {
    title: <Link href={"/"}>Home</Link>,
  },
  {
    title: "About",
  },
]

const About = () => {
  return (
    <div className='container mx-auto px-4'>
      <Breadcrumb
        items={route}
        className='mb-5'
      />
    </div>
  )
}

export default About