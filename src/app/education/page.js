import React from "react";
import Navbar from "@/components/Navbar";
import Social from "@/components/Social";
import Image from "next/image";
import { Montserrat, Poppins } from "next/font/google";


const montserrat = Montserrat({ subsets: ["latin"], weight: "900" });
const poppins = Poppins({ subsets: ["latin"], weight: ["200", "300"] });

export default function education() {
  return (
    <main className="min-h-screen flex flex-col px-4 lg:px-6 py-6 lg:justify-evenly items-center lg:flex-row gap-10 lg:gap-5">
      <Navbar current="education" />

      <div className="container h-3/4 p-3 rounded-lg lg:overflow-y-scroll lg:fixed lg:w-4/5 lg:p-10">
        
        <div className={montserrat.className + " text-3xl"}>
          Skills
          <div className="flex gap-3 mt-3 flex-wrap justify-around p-5 border border-white rounded-xl">
          <Image
          src="/html.svg"
          width={100}
          height={100}
          alt="html icon"
          priority={true}
        />
        <Image
          src="/css.svg"
          width={100}
          height={100}
          alt="css icon"
          priority={true}
        />
        <Image
          src="/bootstrap.svg"
          width={90}
          height={90}
          alt="bootstrap icon"
          priority={true}
        />
        <Image
          src="/tailwind.svg"
          width={100}
          height={100}
          alt="tailwind icon"
          priority={true}
        />
        <Image
          src="/js.svg"
          width={100}
          height={100}
          alt="javascript icon"
          priority={true}
        />
        <Image
          src="/jquery.svg"
          width={100}
          height={100}
          alt="jquery icon"
          priority={true}
        />
        <Image
          src="/linux.svg"
          width={100}
          height={100}
          alt="linux icon"
          priority={true}
        />
        <Image
          src="/node.svg"
          width={100}
          height={100}
          alt="nodejs icon"
          priority={true}
        />
        <Image
          src="/express.svg"
          width={100}
          height={100}
          alt="express icon"
          priority={true}
        />
        <Image
          src="/ejs.svg"
          width={100}
          height={100}
          alt="ejs icon"
          priority={true}
        />
        <Image
          src="/git.svg"
          width={100}
          height={100}
          alt="git icon"
          priority={true}
        />
        <Image
          src="/github.svg"
          width={100}
          height={100}
          alt="github icon"
          priority={true}
        />
        <Image
          src="/api.svg"
          width={100}
          height={100}
          alt="api icon"
          priority={true}
        />
        <Image
          src="/sql.svg"
          width={100}
          height={100}
          alt="mysql icon"
          priority={true}
        />
        <Image
          src="/mongo.svg"
          width={100}
          height={100}
          alt="mongodb icon"
          priority={true}
        />
        <Image
          src="/react.svg"
          width={100}
          height={100}
          alt="react icon"
          priority={true}
        />
        <Image
          src="/next.svg"
          width={100}
          height={100}
          alt="nextjs icon"
          priority={true}
        />
          </div>
        </div>

      </div>

      <Social />
    </main>
  );
}
