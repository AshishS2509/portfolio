import Navbar from '@/components/Navbar'
import Social from '@/components/Social'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col px-12 py-6 justify-evenly items-center lg:flex-row gap-10 lg:gap-5">

        <Navbar current="home"/>

      <div className="col lg:mx-20">
        <Image
        src="/profile.jpg"
        width={400}
        height={400}
        alt="Picture of Ashish Khatik"
        style={{objectFit: "contain", borderRadius:"100%", border:"6px solid white"}}
        priority={true}
        />
      </div>

      <div className="col text-center lg:text-left">
        <p className='mb-4 text-lg lg:text-4xl leading-tight font-bold tracking-tighter'><span className='text-yellow-400'>Ashish Khatik</span></p>
        <p className='mb-4 text-lg lg:text-4xl leading-tight font-bold tracking-tighter'><span className='text-blue-500'>Web Developer</span> and Code Enthusiast.</p>
        <p className='mb-4 text-sm lg:text-xl tracking-tighter'>Creating awesome websites with a touch of innovation and fun vibes!</p>
      </div>
      
      <Social />

    </main>
  )
}
