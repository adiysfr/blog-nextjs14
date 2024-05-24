import React from 'react'
import { Carousel } from 'antd';
import './style.css'



const data = [
  {
    img : "https://img.freepik.com/free-vector/dark-blue-abstract-banner-half-tone-style-design_1017-39869.jpg",
    title: "blog 1",
    subTitle: "Loreem ispum dolor sit amet"
  },
  {
    img : "https://img.freepik.com/free-vector/half-tone-blue-abstract-background-with-text-space_1017-41428.jpg",
    title: "blog 2",
    subTitle: "Loreem ispum dolor sit amet2"
  }
]

const Banner = () => {
  return (
    <div>
      <Carousel autoplay autoplaySpeed={3000} fade={true}>
        {
          data.map((item, idx) => (
            <div key={idx+1} className="bg-banner overflow-hidden">
              <div className='relative'>
                <img className='brightness-50 md:w-full' src={item.img} />
                <div className='flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 w-full'>
                  <h3>{item?.title}</h3>
                  <p>{item?.subTitle}</p>
                </div>
              </div>
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}

export default Banner