import React from "react";
import Navbar from "@/components/Navbar";
import Social from "@/components/Social";
import Image from "next/image";
import { Montserrat, Poppins } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: "900" });
const poppins = Poppins({ subsets: ["latin"], weight: ["200", "500"] });

export default function education() {
  return (
    <main className="min-h-screen flex flex-col px-4 lg:px-6 py-6 lg:justify-evenly items-center lg:flex-row gap-10 lg:gap-5">
      <Navbar current="education" />

      <div className="container h-3/4 p-3 rounded-lg lg:overflow-y-scroll lg:fixed lg:w-4/5 lg:p-10">
        <div className={montserrat.className + " text-3xl"}>
          Skills
          <div className="flex gap-3 mt-3 flex-wrap justify-around p-5 border border-white rounded-xl">
            <Image
              className="w-1/4 lg:w-24"
              src="/html.svg"
              width={100}
              height={100}
              alt="html icon"
              priority={true}
            />
            <Image
              className="w-1/4 lg:w-24"
              src="/css.svg"
              width={100}
              height={100}
              alt="css icon"
              priority={true}
            />
            <Image
              className="w-1/4 lg:w-24"
              src="/bootstrap.svg"
              width={90}
              height={90}
              alt="bootstrap icon"
              priority={true}
            />
            <Image
              className="w-1/4 lg:w-24"
              src="/tailwind.svg"
              width={100}
              height={100}
              alt="tailwind icon"
              priority={true}
            />
            <Image
              className="w-1/4 lg:w-24"
              src="/js.svg"
              width={100}
              height={100}
              alt="javascript icon"
              priority={true}
            />
            <Image
              className="w-1/4 lg:w-24"
              src="/jquery.svg"
              width={100}
              height={100}
              alt="jquery icon"
              priority={true}
            />
            <Image
              className="w-1/4 lg:w-24"
              src="/linux.svg"
              width={100}
              height={100}
              alt="linux icon"
              priority={true}
            />
            <Image
              className="w-1/4 lg:w-24"
              src="/node.svg"
              width={100}
              height={100}
              alt="nodejs icon"
              priority={true}
            />
            <Image
              className="w-1/4 lg:w-24"
              src="/express.svg"
              width={100}
              height={100}
              alt="express icon"
              priority={true}
            />
            <Image
              className="w-1/4 lg:w-24"
              src="/ejs.svg"
              width={100}
              height={100}
              alt="ejs icon"
              priority={true}
            />
            <Image
              className="w-1/4 lg:w-24"
              src="/git.svg"
              width={100}
              height={100}
              alt="git icon"
              priority={true}
            />
            <Image
              className="w-1/4 lg:w-24"
              src="/github.svg"
              width={100}
              height={100}
              alt="github icon"
              priority={true}
            />
            <Image
              className="w-1/4 lg:w-24"
              src="/api.svg"
              width={100}
              height={100}
              alt="api icon"
              priority={true}
            />
            <Image
              className="w-1/4 lg:w-24"
              src="/sql.svg"
              width={100}
              height={100}
              alt="mysql icon"
              priority={true}
            />
            <Image
              className="w-1/4 lg:w-24"
              src="/mongo.svg"
              width={100}
              height={100}
              alt="mongodb icon"
              priority={true}
            />
            <Image
              className="w-1/4 lg:w-24"
              src="/react.svg"
              width={100}
              height={100}
              alt="react icon"
              priority={true}
            />
            <Image
              className="w-1/4 lg:w-24"
              src="/next.svg"
              width={100}
              height={100}
              alt="nextjs icon"
              priority={true}
            />
          </div>
        </div>

        <div className={montserrat.className + " text-xl mt-8 lg:text-3xl"}>
          Experience
          <div
            className={
              poppins.className +
              " mt-3 p-5 border border-white rounded-xl grid lg:grid-cols-2 gap-4"
            }
          >
            <div className="text-base font-bold lg:text-xl">
              Full Stack Developer Intern <br />
              <a
                href="https://midknightstudio.com/"
                className="text-xs font-extralight lg:text-base"
              >
                🔗 Midknight Studio PVT LTD, Nashik
              </a>
            </div>
            <div className="font-light text-xs lg:text-lg">Oct 2022 - May 2023</div>
          </div>
        </div>

        <div className={montserrat.className + " text-xl mt-8 lg:text-3xl"}>
          Certifications
          <div
            className={
              poppins.className +
              " mt-3 p-5 border border-white rounded-xl grid lg:grid-cols-2 gap-4"
            }
          >
            <div className="text-base font-bold lg:text-xl">
              Complete Web development Bootcamp <br />
              <a
                href="https://www.udemy.com/certificate/UC-76854e95-01ac-41cb-973b-62639a4e000b/"
                className="text-xs font-extralight lg:text-base"
              >
                🔗 Angela Yu, Udemy
              </a>
            </div>
            <div className="font-light text-xs lg:text-lg">May 2022</div>

            <div className="text-base font-bold lg:text-xl">
              React Tutorials <br />
              <a
                href=""
                className="text-xs font-extralight lg:text-base"
              >
                🔗 Great Learning
              </a>
            </div>
            <div className="font-light text-xs lg:text-lg">Oct 2023</div>
          </div>
        </div>
      </div>

      <Social />
    </main>
  );
}
