import type { Metadata } from "next";
import React from 'react'
import { Breadcrumb } from "antd";
import Banner from "../components/Banner";
import NameUser from "./component/NameUser";
import CardComponentHome from "./component/CardComponentHome/CardComponentHome";

export const metadata: Metadata = {
  title: "Home",
  description: "Home Page",
  icons: {
    icon: '/markadi.png',
  },
};
const route = [
  {
    title: "Home",
  },
]

const page = async () => {
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb
        items={route}
        className='mb-5'
      />
      
      <NameUser/>

      <Banner />

      <CardComponentHome />
      {/* <ListFilm/>   */}
    </div>
  )
}

export default page