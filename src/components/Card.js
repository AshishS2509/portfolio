"use client"
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const montserrat = Montserrat({ subsets: ['latin'] })

function Card(props) {

    const link = props.link
    function handelClick(){
        window.location.href = link
    }

  return (
    <div className='cursor-pointer' onClick = {handelClick}>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-gray-700 shadow-md p-3">
        <Image className="w-full rounded-lg" src={props.image} width={1000} height={700} alt="QR-Generator Screenshot"  />
        <div className="px-6 py-4">
            <div className={montserrat.className + " font-bold text-xl mb-2"}>{props.title}</div>
            <p className="text-gray-700 text-base">
            {props.description}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            {props.tags.map((item, index) => <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item}</span>)}
        </div>
        </div>

    </div>
  )
}

export default Card