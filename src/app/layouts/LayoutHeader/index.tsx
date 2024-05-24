'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LayoutHeader = () => {
  const pathName = usePathname();
  

  const navLink = [
    {
      name: "Home", href: "/home"
    },
    {
      name: "Blogs", href: "/blogs"
    },
    // {
    //   name: "Login", href: "/auth/login"
    // },
    // {
    //   name: "Register", href: "/auth/register"
    // },
    {
      name: "About", href: "/about"
    },
  ]
  return (
    <header className='container mx-auto p-5'>
      <ul className='flex flex-nowrap gap-4 justify-end'>
        {navLink.map( item => {
          const isActive = pathName.startsWith(item.href);
          return (
            <li key={item.name}><Link className={!isActive ? 'text-black font-bold mr-4' : 'text-blue-500 font-bold mr-4'} href={item.href}>{item.name}</Link></li>
          )}
        )}
      </ul>
    </header>
  )
}

export default LayoutHeader