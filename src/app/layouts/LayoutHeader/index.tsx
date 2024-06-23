'use client'

import React,{ useState, useEffect} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


type MenuItem = {
  name: string;
  href: string;
};

const LayoutHeader = () => {
  const [isLoading, setisLoading] = useState(true)
  const [isLogin, setisLogin] = useState({})
  const pathName = usePathname();

  useEffect(() => {
    const localStorageData = localStorage.getItem("tokenAuth");
    setisLogin(localStorageData!)
    setTimeout(() => {
      setisLoading(false)
    }, 1000);
  }, [pathName])
  
  const navLink = (): MenuItem[] => {
    const tempMenu: MenuItem[] = [
      { name: "Home", href: "/home" },
      { name: "Blogs", href: "/blogs" },
      { name: "About", href: "/about" },
      { name: "Users", href: "/users" }
    ];
  
    if (!isLogin) {
      return tempMenu.filter(item => item.name !== "Users");
    }
  
    return tempMenu;
  };
  return (
    <div>
      <header className='container mx-auto p-5 mb-8 flex flex-nowrap gap-4 items-center justify-between'>
        <div>
          <Link href={'/home'}>
            <img className='w-[100px] sm:w-[200px] rounded-lg' src='/adiyr1.png' />
          </Link>
        </div>
        <ul className='flex flex-nowrap gap-4 justify-end'>
          {navLink().map( item => {
            const isActive = pathName.startsWith(item.href);
            return (
              <li key={item.name}><Link className={!isActive ? 'text-black font-bold mr-4' : 'text-blue-500 font-bold mr-4'} href={item.href}>{item.name}</Link></li>
            )}
          )}
        </ul>
      </header>
      {isLoading &&
        <div className='wrapping-loader'>
          <div className="custom-loader"></div>
        </div>
      }
    </div>
  )
}

export default LayoutHeader