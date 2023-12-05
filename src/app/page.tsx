import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Footer from './components/Footer'
import Visi from './components/Visi'
import Proker from './components/Proker'

export default function Home() {
  return (
    <main className='h-screen bg-cyan-950 text-white'>
      <Navbar />
      <Hero />
      <Profile/>
      <Visi/>
      <Proker/>
      <Footer/>
    </main>
  )
}
