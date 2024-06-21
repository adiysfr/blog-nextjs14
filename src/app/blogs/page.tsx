import type { Metadata } from "next";
import CardBlog from './components/CardBlog'
import { Breadcrumb } from 'antd'
import Link from 'next/link'


export const metadata: Metadata = {
  title: "Blogs",
  description: "Blog List Page",
  icons: {
    icon: '/markadi.png',
  },
};


const route = [
  {
    title: <Link href={"/"}>Home</Link>,
  },
  {
    title: "Blogs",
  },
]




const Blog = () => {
  return (
    <div className='container mx-auto px-4'>
      <Breadcrumb
        items={route}
        className='mb-5'
      />
      <CardBlog />
    </div>
  )
}

export default Blog