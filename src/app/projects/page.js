import Card from '@/components/Card'
import Navbar from '@/components/Navbar'
import Social from '@/components/Social'

export default function projects() {
  return (
    <main className="min-h-screen flex flex-col px-12 py-6 lg:justify-evenly items-center lg:flex-row gap-10 lg:gap-5">

        <Navbar current="projects"/>
        <Card 
        link = "https://qr-generator-gold.vercel.app/"
        image = "/QR.png"
        title = "QR-Generator"
        description = "Create customized QR codes easily with our Next.js QR Generator. Perfect for sharing websites, contact info, and more. It's user-friendly, works on all devices. Trustworthy and quick, it's the simple solution for digital needs."
        tags = {["Next.js"]}
        />
        <Card 
        link = "https://toll-calculator-ten-beta.vercel.app/"
        image = "/toll.png"
        title = "Toll Calculator"
        description = "ReactJS web app utilizing Toll Guru API for toll information. Features Leaflet map with polyline mapping, providing toll costs, travel time, fuel usage, and distance for routes with optional waypoints."
        tags = {["React", "Toll-Guru API", "Leaflet Maps"]}
        />
        <Social />
      
    </main>
  )
}
