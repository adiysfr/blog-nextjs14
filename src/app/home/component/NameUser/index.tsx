'use client'
import React from 'react'

const NameUser = () => {
  const dataStorage = JSON.parse(localStorage.getItem("tokenAuth"));

  if(dataStorage?.name){
    return (
    <div className='py-6'>Welcome, {dataStorage?.name}</div>
  )
  }
  else return null;
}

export default NameUser