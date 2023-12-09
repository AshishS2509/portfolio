import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col p-12 justify-evenly items-center lg:flex-row gap-10">
      <div className="absolute bottom-0 my-10 lg:mx-10 lg:my-0 lg:left-0">
        <Navbar />
      </div>
      <div className="col">
      <Image
      src="/profile.jpg"
      width={400}
      height={400}
      alt="Picture of Ashish Khatik"
      loading="lazy"
      style={{objectFit: "contain", borderRadius:"100%"}}
    />
      </div>
      <div className="col text-center lg:text-left">
        <p className='mb-4 text-4xl leading-tight font-bold tracking-tighter'>Hey!!</p>
        <p className='mb-4 text-4xl leading-tight font-bold tracking-tighter'>My name is <span className='text-yellow-400'>Ashish Khatik</span></p>
        <p className='mb-4 text-4xl leading-tight font-bold tracking-tighter'>I am a <span className=' text-sky-500'>Full stack web developer</span></p>
      </div>
    </main>
  )
}
