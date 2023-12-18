import React from "react";
import Navbar from "@/components/Navbar";
import Social from "@/components/Social";
import { Montserrat, Poppins } from "next/font/google";

const montserrat = Montserrat({subsets:["latin"], weight:"500"})
const poppins = Poppins({subsets:["latin"], weight:["200", "300"]})

export default function education() {
  return (
    <main className="min-h-screen flex flex-col px-4 lg:px-6 py-6 lg:justify-evenly items-center lg:flex-row gap-10 lg:gap-5">
      <Navbar current="education" />

      <div className="container h-3/4 p-3 rounded-lg lg:overflow-y-scroll lg:fixed lg:w-4/5 lg:p-10">

        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="container p-3 bg-gray-900 rounded-md lg:w-full">
            <div className={montserrat.className + " text-sm lg:text-xl text-center"}>Frontend</div>
            <hr className="my-2" />
            <div className="">
              <ul className={poppins.className + " text-center font-thin text-xs lg:text-base leading-6"}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Next.js</li>
              </ul>
            </div>
          </div>
          <div className="container p-3 bg-gray-900 rounded-md lg:w-full">
            <div className={montserrat.className + " text-sm lg:text-xl text-center"}>Backend</div>
            <hr className="my-2" />
            <div className="">
              <ul className={poppins.className + " text-center  font-thin text-xs lg:text-base leading-6"}>
                <li>Node.js</li>
                <li>Express</li>
                <li>API</li>
              </ul>
            </div>
          </div>
          <div className="container p-3 bg-gray-900 rounded-md lg:w-full">
            <div className={montserrat.className + " text-sm lg:text-xl text-center"}>Database</div>
            <hr className="my-2" />
            <div className="">
              <ul className={poppins.className + " text-center font-thin text-xs lg:text-base leading-6"}>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
          <div className="container p-3 bg-gray-900 rounded-md lg:w-full">
            <div className={montserrat.className + " text-sm lg:text-xl text-center"}>Other</div>
            <hr className="my-2" />
            <div className="">
              <ul className={poppins.className + " text-center font-thin text-xs lg:text-base leading-6"}>
                <li>Linux CLI</li>
                <li>Hosting</li>
                <li>Git</li>
                <li>Hosting</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container bg-gray-900 my-8 p-6 rounded-md">
          <div className={montserrat.className + " text-sm lg:text-xl font-bold"}>Certifications</div>
          <hr className="my-2" />
          <div className={poppins.className + " font-thin text-xs lg:text-base"}>Complete Web Development Bootcamp</div>
          <cite className="font-thin text-xs lg:text-base">Angela yu</cite>
          <div className={poppins.className + " font-thin text-xs lg:text-base mt-3"}>React js Tutorial</div>
          <cite className="font-thin text-xs lg:text-base">Great Learning</cite>
        </div>

      </div>

      <Social />
    </main>
  );
}
