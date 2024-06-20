'use client';
import React from 'react'

const Banner = () => {
  return (
    <div>
      {/* Banner */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-8'>
        <div>
          <h1 className='text-5xl font-bold pb-4'>Adi Yusuf Ramadhan</h1>
          <h4 className='text-2xl pb-2'>Experienced Front-End Engineer</h4>
          <p className='text-xl'>I build exceptional and accessible digital experience for the web.</p>
        </div>
        <div>
          <img src='/undraw_code_thinking_re_gka2.svg' />
        </div>
      </div>

      {/* Experience */}
      <div className='mt-12'>
        <div>
          <h2 className='text-5xl font-bold text-center py-8'>Experience</h2>
        </div>

        <div className='mb-8'>
          <div>2023 — Present</div>
          <div>
            <h3 className='py-3 font-bold'>Frontend Web Developer, PT. ASTRA GRAPHIA INFORMATION TECHNOLOGY (AGIT)</h3>
            <p>Here I work as a front end web developer, I work on several website projects for clients, such as Pertamina Gas Negara (PGN)</p>
            <div className='flex flex-wrap gap-5 pt-4'>
              <span className='rounded-2xl text-[#604f75] bg-[#d1baeb] px-3 py-1 font-bold'>Html</span>
              <span className='rounded-2xl text-[#604f75] bg-[#d1baeb] px-3 py-1 font-bold'>Css</span>
              <span className='rounded-2xl text-[#604f75] bg-[#d1baeb] px-3 py-1 font-bold'>Javascript</span>
              <span className='rounded-2xl text-[#604f75] bg-[#d1baeb] px-3 py-1 font-bold'>React</span>
            </div>
          </div>
        </div>
        
        <div className='mb-8'>
          <div>2021 — 2023</div>
          <div>
            <h3 className='py-3 font-bold'>Frontend Web Developer, PT. AKO MEDIA ASIA (SALT)</h3>
            <p>Here I work as a front end web developer, I work on several website projects for clients, such as nutriclub, nutripro, and sangfor</p>
            <div className='flex flex-wrap gap-5 pt-4'>
            <span className='rounded-2xl text-[#604f75] bg-[#d1baeb] px-3 py-1 font-bold'>Html</span>
              <span className='rounded-2xl text-[#604f75] bg-[#d1baeb] px-3 py-1 font-bold'>Css</span>
              <span className='rounded-2xl text-[#604f75] bg-[#d1baeb] px-3 py-1 font-bold'>Pimcore</span>
              <span className='rounded-2xl text-[#604f75] bg-[#d1baeb] px-3 py-1 font-bold'>Drupal</span>
              <span className='rounded-2xl text-[#604f75] bg-[#d1baeb] px-3 py-1 font-bold'>Javascript</span>
              <span className='rounded-2xl text-[#604f75] bg-[#d1baeb] px-3 py-1 font-bold'>React</span>
              <span className='rounded-2xl text-[#604f75] bg-[#d1baeb] px-3 py-1 font-bold'>Vue</span>
            </div>
          </div>
        </div>

        <div className='mb-8'>
          <div>2018 — 2021</div>
          <div>
            <h3 className='py-3 font-bold'>Frontend Web Developer, PT. AKO MEDIA ASIA (SALT)</h3>
            <p>Here I work as a front end web developer, I work on several website projects for clients, such as nutriclub, nutripro, and sangfor</p>
            <div className='flex flex-wrap gap-5 pt-4'>
              <span className='rounded-2xl text-[#604f75] bg-[#d1baeb] px-3 py-1 font-bold'>Html</span>
              <span className='rounded-2xl text-[#604f75] bg-[#d1baeb] px-3 py-1 font-bold'>Css</span>
              <span className='rounded-2xl text-[#604f75] bg-[#d1baeb] px-3 py-1 font-bold'>Laravel</span>
              <span className='rounded-2xl text-[#604f75] bg-[#d1baeb] px-3 py-1 font-bold'>Javascript</span>
              <span className='rounded-2xl text-[#604f75] bg-[#d1baeb] px-3 py-1 font-bold'>React</span>
              <span className='rounded-2xl text-[#604f75] bg-[#d1baeb] px-3 py-1 font-bold'>Nextjs</span>
              <span className='rounded-2xl text-[#604f75] bg-[#d1baeb] px-3 py-1 font-bold'>Vue</span>
            </div>
          </div>
        </div>

      </div>


      {/* Project */}
      <div className='mt-12'>
        <div>
          <h2 className='text-5xl font-bold text-center py-8'>Project</h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-8'>
          
          <div className='mb-8 grid grid-cols-1 xl:grid-cols-2 gap-4 py-8'>
            <div><img src="/preview.svg" /></div>
            <div>
              <h3>Qasir web profile company</h3>
              <div>
                <h3 className='font-bold'>Qasir.id</h3>
                <p>In this project, my team and I developed the company profile website qasir.id</p>
                <span className='font-bold text-[12px]'>Tech Stacks : Laravel, Mysql, Bootstrap, Jquery, Scss</span>
              </div>
            </div>
          </div>
          <div className='mb-8 grid grid-cols-1 xl:grid-cols-2 gap-4 py-8'>
            <div><img src="/preview.svg" /></div>
            <div>
              <h3>Qasir web application</h3>
              <div>
                <h3 className='font-bold'>Web App</h3>
                <p>In this project, my team and I developed a website dashboard for the point of sales application</p>
                <span className='font-bold text-[12px]'>Tech Stacks : Rest API, Laravel, Mysql, Bootstrap, Jquery, Vuejs, Scss</span>
              </div>
            </div>
          </div>
          <div className='mb-8 grid grid-cols-1 xl:grid-cols-2 gap-4 py-8'>
            <div><img src="/preview.svg" /></div>
            <div>
              <h3>Nutricia Professional</h3>
              <div>
                <h3 className='font-bold'>nutriciaprofessional.id</h3>
                <p>In this project, my team and I developed a website for Nutricia professionals such as a feature questionnaire and landing page</p>
                <span className='font-bold text-[12px]'>Tech Stacks : Rest API, Pimcore, Mysql, Bootstrap, Jquery, Vanilla Js, Scss</span>
              </div>
            </div>
          </div>
          <div className='mb-8 grid grid-cols-1 xl:grid-cols-2 gap-4 py-8'>
            <div><img src="/preview.svg" /></div>
            <div>
              <h3>Nutri Club</h3>
              <div>
                <h3 className='font-bold'>nutriclub.co.id</h3>
                <p>In this project, my team and I developed a website for Nutriclub such as a feature questionnaire and landing page</p>
                <span className='font-bold text-[12px]'>Tech Stacks : Rest API, Pimcore, Mysql, Bootstrap, Jquery, Vanilla Js, Scss</span>
              </div>
            </div>
          </div>
          <div className='mb-8 grid grid-cols-1 xl:grid-cols-2 gap-4 py-8'>
            <div><img src="/preview.svg" /></div>
            <div>
              <h3>Sangfor</h3>
              <div>
                <h3 className='font-bold'>sangfor.com/id</h3>
                <p>In this project, my team and I developed a website for sangfor, this client is a cyber security company</p>
                <span className='font-bold text-[12px]'>Tech Stacks : Rest API, Drupal Cms, Mysql, Bootstrap, Alpine Js, Vanilla Js, Scss</span>
              </div>
            </div>
          </div>
          <div className='mb-8 grid grid-cols-1 xl:grid-cols-2 gap-4 py-8'>
            <div><img src="/preview.svg" /></div>
            <div>
              <h3>Billing System PT Pertamina Gas Negara (PGN)</h3>
              <div>
                <h3 className='font-bold'>Web App</h3>
                <p>In this project, my team and I developed a billing system for the Pertamina Gas Negara company</p>
                <span className='font-bold text-[12px]'>Tech Stacks: Antd,Tailwind, Reactjs, Redux Thunk, Axios, Rest Api, Java Spring Boot</span>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Banner