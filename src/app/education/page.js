import React from "react";
import Navbar from "@/components/Navbar";
import Social from "@/components/Social";

export default function education() {
  return (
    <main className="min-h-screen flex flex-col px-4 lg:px-6 py-6 lg:justify-evenly items-center lg:flex-row gap-10 lg:gap-5">
      <Navbar current="education" />

      <div className="container h-3/4 p-3 bg-gray-900 rounded-lg lg:overflow-y-scroll lg:fixed lg:w-4/5 lg:p-10">

        <div className="container mx-auto">
          <div className="text-lg lg:text-3xl">Education</div>
          <hr className="my-2" />
          <div className="text-sm lg:text-lg">
            Bacholers of Computer Science Engineering :
          </div>
          <div className="grid grid-cols-2 bg-gray-600 p-3 rounded-md">
            <div className="text-xs lg:text-base">
              Savitribai Phule Pune University
            </div>
            <div className="text-xs lg:text-base">CGPA : 7.84</div>
          </div>
        </div>

      </div>

      <Social />
    </main>
  );
}
