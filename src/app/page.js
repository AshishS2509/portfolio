import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col p-12 justify-evenly items-center lg:flex-row gap-10 lg:gap-5">
      <div className="absolute bottom-0 my-10 lg:mx-10 lg:my-0 lg:left-0 lg:bottom-auto">
        <Navbar />
      </div>
      <div className="col">
      <Image
      src="/profile.jpg"
      width={400}
      height={400}
      alt="Picture of Ashish Khatik"
      loading="lazy"
      style={{objectFit: "contain", borderRadius:"100%", border:"12px solid white"}}
    />
      </div>
      <div className="col text-center lg:text-left">
        <p className='mb-4 text-4xl leading-tight font-bold tracking-tighter'><span className='text-yellow-400'>Ashish Khatik</span></p>
        <p className='mb-4 text-4xl leading-tight font-bold tracking-tighter'><span className='text-blue-500'>Web Developer</span> and Code Enthusiast.</p>
        <p className='mb-4 text-xl tracking-tighter'>Creating awesome websites with a touch of innovation and fun vibes!</p>
      </div>
    </main>
  )
}
