import React from 'react'
import Navbar from '@/components/Navbar'
import Social from '@/components/Social'

export default function education() {
  return (
    <main className="min-h-screen flex flex-col px-4 lg:px-12 py-6 justify-evenly items-center lg:flex-row gap-10 lg:gap-5">

      <Navbar current="education"/>
      
        <div className="container lg:w-3/4 p-2 lg:p-12">
          <div className="my-2">
            <p className='text-lg lg:text-3xl mb-2'>Bachelors in Computer Science Engineering <span className='text-xs lg:text-sm font-light lg:float-right mt-2'>: 2018 - 2023</span></p>
            <hr className='mb-3' />
            <div className="flex gap-2 lg:gap-12 mb-8 flex-col lg:flex-row">
              <div className="col w-full text-xs lg:text-lg">Gokhale Education Socities R.H.Sapat College of Engineer, Management and Research, Nashik</div>
              <div className="col w-full text-xs lg:text-lg">CGPA - 7.84</div>
            </div>
          </div>
          <div className="my-2">
            <p className='text-lg lg:text-3xl mb-2'>Higher Secondary School <span className='text-xs lg:text-sm font-light lg:float-right mt-2'>: 2016 - 2018</span></p>
            <hr className='mb-3' />
            <div className="flex gap-2 lg:gap-12 mb-8 flex-col lg:flex-row">
              <div className="col w-full text-xs lg:text-lg">K.P.G Arts, Commerce and Science College, Igatpuri.</div>
              <div className="col w-full text-xs lg:text-lg">PCM - 55.85%</div>
            </div>
          </div>
          <div className="my-2">
            <p className='text-lg lg:text-3xl mb-2'>Secondary school certificate <span className='text-xs lg:text-sm font-light lg:float-right mt-2'>: 2016</span></p>
            <hr className='mb-3' />
            <div className="flex gap-2 lg:gap-12 mb-8 flex-col lg:flex-row">
              <div className="col w-full text-xs lg:text-lg">Wonderland High School and Jr. College, Igatpuri.</div>
              <div className="col w-full text-xs lg:text-lg">77.80%</div>
            </div>
          </div>
        </div>

      <Social />

    </main>
  )
}