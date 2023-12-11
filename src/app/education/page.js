import React from 'react'
import Navbar from '@/components/Navbar'
import Social from '@/components/Social'

export default function education() {
  return (
    <main className="min-h-screen flex flex-col px-12 py-6 justify-evenly items-center lg:flex-row gap-10 lg:gap-5">

      <Navbar current="education"/>
      
      <Social />

    </main>
  )
}