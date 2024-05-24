import { Breadcrumb } from 'antd';
import Link from 'next/link';
import React from 'react'

interface DetailBlogProps {
  params: {
    slug?: string;
  };
}

const route = [
  {
    title: <Link href={"/"}>Home</Link>,
  },
  {
    title: <Link href={"/blogs"}>Blogs</Link>,
  },
  {
    title: "Blog Detail",
  },
]

const DetailBlog: React.FC<DetailBlogProps> = ({ params }) => {
  console.log("🚀 ~ DetailBlog ~ params:", params)
  return (
    <div className='container mx-auto'>
      <Breadcrumb
        items={route}
        className='mb-5'
      />
      DetailBlog {params?.slug}
    </div>
  )
}

export default DetailBlog