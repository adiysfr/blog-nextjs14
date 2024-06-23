'use client'

import React from 'react'

const LayoutFooter = () => {
  return (
    <footer className='bg-[#292233]'>
      <div className='container mx-auto p-3'>
        <div>
          <p className='text-[#ffff] text-center'>{new Date().getFullYear()} | Adi Yusuf Ramadhan</p>
        </div>
      </div>
    </footer>
  )
}

export default LayoutFooter