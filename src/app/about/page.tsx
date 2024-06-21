import type { Metadata } from "next";
import { Breadcrumb } from 'antd'
import Link from 'next/link'
import React from 'react'
import Banner from './component/Banner'

export const metadata: Metadata = {
  title: "About",
  description: "About Page",
  icons: {
    icon: '/markadi.png',
  },
};

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
      <Banner />
    </div>
  )
}

export default About