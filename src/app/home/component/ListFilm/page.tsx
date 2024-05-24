'use client'

import LoaderCustom from '@/app/components/LoaderCustom';
import React, {useState, useEffect, useRef } from 'react'

// async function getData() {
//   const res = await fetch('https://www.omdbapi.com/?s=action&apikey=1b9d71d2', { next: { revalidate: 1000 } }) 
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//   return res.json()
// }

const ListFilm = () => {
  const [data, setData] = useState<Array<any>>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    // fetch(`https://www.omdbapi.com/?s=action&page=${page}&apikey=1b9d71d2`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data)
    //     setLoading(false)
    //   })

      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(`https://www.omdbapi.com/?s=action&page=${page}&apikey=1b9d71d2`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const datas = await response.json();
          setData([...data, ...datas.Search]);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
  
      fetchData();
  }, [page])

  // Attach scroll event listener when component mounts
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      const scrollPosition = window.scrollY;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        setPage(prevstate => prevstate + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleClick = (type: string): void => {
    if (type === "next") {
      setPage(page + 1);
    } else {
      if (page !== 1) {
        setPage(page - 1);
      }
    }
  };
  

  // if (isLoading) return <p>Loading...</p>
  // if (!data) return <p>No profile data</p>

  return (
    <div>
      {isLoading && <LoaderCustom/>}
      <div className='grid grid-cols-2 gap-4'>
        {data?.map((item: any) => (
          <div className='flex flex-col justify-center items-center' key={item.Title}>
            <p className='pb-3'>{item?.Title}</p>
            <img src={item?.Poster} width={100}/>
          </div>
        ))}
      </div>
      <div className='py-5 flex items-center justify-center'>
        <ul className='flex gap-5'>
          <li>
            <button 
              className={page === 1 ? 'cursor-not-allowed' : ''} 
              onClick={()=>handleClick('prev')}
            >
              Prev
            </button>
          </li>
          |
          <li><button onClick={()=>handleClick('next')}>Next</button></li>
        </ul>
      </div>
    </div>
  )
}

export default ListFilm