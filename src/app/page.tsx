import Image from 'next/image'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import CountdownTimer from './components/CountdownTimer'
import AboutSection from './components/AboutSection'

export default function Home() {
  return (
    <main className='overflow-x-hidden flex min-h-screen flex-col bg-white'>
      <NavBar />
      <div className='container mt-24 mx-auto py-4 px-12'>
        <HeroSection/>
        <CountdownTimer/>
        <AboutSection/>
      </div>
    </main>
  )
}
