import react from 'react'
import NavBar from '../components/NavBar'
import EventList from '../components/EventList'

export default function Home() {
  return (
    <main className='overflow-x-hidden flex min-h-screen flex-col bg-white'>
      <NavBar />
      <div className='container mt-24 mx-auto py-4 px-12'>
        <h1>EVENTS</h1>
      </div>
    </main>
  )
}
