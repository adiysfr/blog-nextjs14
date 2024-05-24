'use client'
import Link from 'next/link'
import React from 'react'
import { Button, Card, Pagination } from 'antd';

const { Meta } = Card;

interface CardsProps {
  isPaging: boolean;
  more: boolean;
  data: Array<any>;
  onChange?: (page: number, pageSize?: number | undefined) => void;
}

const Cards: React.FC<CardsProps> = ({ data, isPaging, more, onChange }) => {
console.log("🚀 ~ data:", data)

  return (
    <div className='pt-8'>
      {
        isPaging && (
          <div className='py-5'>
            <Pagination current={data?.page} total={data?.totalData} onChange={onChange}/>
          </div>
        )
      }
      {
        more && (
          <div className='flex justify-end'>
            <Link href={"/blogs"}><Button type="primary">More Blogs</Button></Link>
          </div>
        )
      }
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-4'>
        {data?.data?.map(item  =>(
          <Link 
            href={{
              pathname: `/blogs/${item.slug}`,
            }} 
            key={item.id} 
            className='p-3 bg-[#3b3b3b] rounded-lg lg:h-90 overflow-hidden'
          >
            <Card
              hoverable
              cover={
                <div className='h-[9rem] overflow-hidden'>
                  <img className='hover:scale-105 transition duration-300 ease-in-out'  alt="example" src={item.poster_url} />
                </div>
              }
            >
              <Meta title={item?.title} description="www.instagram.com" />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Cards