"use client";
import Navbar from "@/components/Navbar";
import Social from "@/components/Social";
import Head from "next/head";
import Image from "next/image";
import { Typewriter } from "nextjs-simple-typewriter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col px-12 py-6 lg:justify-evenly items-center lg:flex-row gap-10 lg:gap-5">
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>

      <Navbar current="home" />

      <div className="col lg:mx-20">
        <Image
          src="/profile.jpg"
          width={400}
          height={400}
          alt="Picture of Ashish Khatik"
          style={{
            objectFit: "contain",
            borderRadius: "100%",
            border: "6px solid white",
          }}
          priority={true}
        />
      </div>

      <div className="col text-center lg:text-left w-4/5 lg:w-1/2">
        <p className="mb-4 text-2xl lg:text-4xl leading-tight font-bold tracking-tighter">
          <span className="text-yellow-400">Ashish Khatik</span>
        </p>
        <p className="mb-4 text-xl lg:text-4xl font-bold tracking-tighter inline-block w-full">
          <span className="text-blue-500">Web Developer</span>
          &ensp;and&ensp;
          <span className="block lg:inline-block mx-auto font-mono font-thin">
            <Typewriter
              words={[
                "Code Enthusiast.",
                "Tech Alchemist.",
                "Algorithm Juggler.",
                "Binary Virtuoso.",
              ]}
              typeSpeed={40}
              deleteSpeed={40}
              delaySpeed={2000}
              loop={0}
              cursor={true}
              startFrom={"full"}
            />
          </span>
        </p>
        <p className="mb-4 text-sm lg:text-xl tracking-tighter">
          Creating awesome websites with a touch of innovation and fun vibes!
        </p>
      </div>

      <Social />
    </main>
  );
}
