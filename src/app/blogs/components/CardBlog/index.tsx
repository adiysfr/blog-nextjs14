'use client'
import Link from 'next/link'
import React from 'react'
import { Card, Pagination } from 'antd';

const { Meta } = Card;

const CardBlog = () => {
  const data = [
    {
      id: 1,
      title: 'blog 1',
      desc: 'Blog 1 descriptsions',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*BQZAbczBfLYtPp-6HmN0ZQ.jpeg'
    },
    {
      id: 2,
      title: 'blog 2',
      desc: 'Blog 1 descriptsions',
      image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    },
    {
      id: 3,
      title: 'blog 3',
      desc: 'Blog 1 descriptsions',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*BQZAbczBfLYtPp-6HmN0ZQ.jpeg'
    },
    {
      id: 4,
      title: 'blog 3',
      desc: 'Blog 1 descriptsions',
      image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    },
    {
      id: 5,
      title: 'blog 3',
      desc: 'Blog 1 descriptsions',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*BQZAbczBfLYtPp-6HmN0ZQ.jpeg'
    },
    {
      id: 6,
      title: 'blog 3',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*BQZAbczBfLYtPp-6HmN0ZQ.jpeg'
    },
  ]  
  return (
    <div>
      <div className='py-5'>
        <Pagination defaultCurrent={1} total={20} />
      </div>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
        {/* {data.map(item  =>(
          <Link href='#' key={item.id} className='p-3 bg-[#3b3b3b] rounded-lg lg:h-90 overflow-hidden'>
            <div className='h-[9rem] overflow-hidden'>
              <img className='hover:scale-105 transition duration-300 ease-in-out' src={item.image} />
            </div>
            <h3 className='text-xl py-3'>{item.title}</h3>
            <p className='truncate '>{item.desc}</p>
          </Link>
        ))} */}

      {data.map(item  =>(
        <Link 
          href={{
            pathname: `/blogs/${item.id}`,
          }} 
          key={item.id} 
          className='p-3 bg-[#3b3b3b] rounded-lg lg:h-90 overflow-hidden'
        >
          <Card
            hoverable
            cover={
              <div className='h-[9rem] overflow-hidden'>
                <img className='hover:scale-105 transition duration-300 ease-in-out'  alt="example" src={item.image} />
              </div>
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Link>
      ))}
      </div>
    </div>
  )
}

export default CardBlog