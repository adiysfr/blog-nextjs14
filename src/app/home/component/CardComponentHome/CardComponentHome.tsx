import Cards from '@/app/components/Cards'
import React from 'react'
import axios from "axios";

async function getData() {
  const res = await fetch('http://localhost:4000/article/pagination?page=1&limit=8' , {
    headers: { 
      'api-key': '05f0b227-d216-4ba9-8c98-8be9b5e5c48b', 
      'Content-Type': 'application/json'
    }
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
 

const CardComponentHome = async () => {
  const data = await getData();
  return (
    <div>
      <Cards data={data} isPaging={false} more={true}/>
    </div>
  )
}

export default CardComponentHome