/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Social from "@/components/Social";
import { Montserrat, Poppins } from "next/font/google";

const monstratt = Montserrat({subsets:["latin"], weight: ["700"]})
const poppins = Poppins({subsets:["latin"], weight: '200'})

export default function contact() {
  return (
    <main className="min-h-screen flex flex-col py-6 lg:justify-evenly items-center lg:flex-col gap-10 lg:gap-5">
      <Navbar current="contact" />

      <div className="container h-3/4 w-11/12 rounded-lg overflow-y-scroll pb-6 lg:w-4/5 lg:flex lg:py-2">
        <div className="mx-auto text-justify pb-10 px-4 text-sm md:w-full lg:text-base lg:w-1/2 lg:pb-0">
          <p className={poppins.className}>
            &ensp;&ensp;&ensp;Hey, I'm Ashish Khatik, originally from Nashik. I
            graduated in Computer Science Engineering from Pune University in
            2023. 
            <br /> <br />
            &ensp;&ensp;&ensp;Computers always fascinated me, so I decided to dive into
            making websites – they're like the digital home for everyone
            nowadays, whether it's for a business or just personal vibes.
            <br /> <br />
            &ensp;&ensp;&ensp;When I'm not glued to the screen coding, you'll
            probably catch me working on puzzles, making strategic moves on the
            chessboard, or simply kicking back with a good movie. Right now, I'm
            on a mission to get really good at web development and soak in all
            the know-how I can. Looking ahead, I aim to make a meaningful mark
            in this field. Let's have a chat sometime and swap stories!
          </p>
        </div>
        <div className="relative flex min-h-scree sm:items-center pt-0">
          <div className="mx-auto lg:px-2 lg:max-w-4xl">
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
                <div className="p-6 lg:p-12 bg-gray-900 rounded-lg text-center lg:text-left w-4/5 lg:w-auto mb-5 lg:mb-0">
                  <h1 className={monstratt.className + " text-xl lg:text-3xl text-white uppercase text-center"}>
                    Get in touch
                  </h1>
                  <hr className="w-4/5 mx-auto mt-4" />
                  <div className="flex items-center mt-4 text-gray-400 text-left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>

                    <div className="ml-4 text-xs lg:text-base tracking-wide w-3/4">
                      B4 Godavari Sankul, Igatpuri, Nashik, Maharashtra, 422403
                    </div>
                  </div>

                  <div className="flex items-center mt-2 text-gray-400 text-left mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>

                    <div className="ml-4 text-xs lg:text-base tracking-wide w-3/4">
                      <a href="tel:+918793891870">+91 8793891870</a>
                    </div>
                  </div>

                  <div className="flex items-center mt-2  text-gray-400 text-left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>

                    <div className="ml-4 text-xs lg:text-base tracking-wide w-3/4">
                      <a href="mailto:ashish.2509.k@gmail.com">
                        ashish.2509.k@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <form
                  className="flex flex-col justify-center w-3/4"
                  action="https://formsubmit.co/khatik.321.ashish@gmail.com"
                  method="POST"
                >
                  <div className="flex flex-col">
                    <label htmlFor="name" className="hidden">
                      Full Name
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="w-100 mt-2 py-3 px-3 rounded-lg text-xs lg:text-base bg-gray-800 border border-gray-700 text-gray-100 focus:border-indigo-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label htmlFor="email" className="hidden">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="w-100 mt-2 py-3 px-3 rounded-lg text-xs lg:text-base bg-gray-800 border border-gray-700 text-gray-100 focus:border-indigo-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label htmlFor="tel" className="hidden">
                      Number
                    </label>
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      placeholder="Contact Number"
                      className="w-100 mt-2 py-3 px-3 rounded-lg text-xs lg:text-base  bg-gray-800 border border-gray-700 text-gray-100 focus:border-indigo-500 focus:outline-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-blue-dark text-xs lg:text-base text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Social />
    </main>
  );
}
