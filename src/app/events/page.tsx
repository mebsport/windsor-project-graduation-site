import NavBar from '../components/NavBar'
import EventList from '../components/EventList'

export default function Home() {
  return (
    <main className='overflow-x-hidden flex min-h-screen flex-col bg-white'>
      <NavBar />
      <div className='container mt-24 mx-auto py-4 px-12'>
        <EventList />
        {/* <EventCalendar
        events={[
          {date: subDays(new Date(),6), title: "Post Video"},
          {date: subDays(new Date(),1), title: "Edit Video"},
          {date: subDays(new Date(),3), title: "Code"}
        ]}
        /> */}
        <h1>EVENTS</h1>
      </div>
    </main>
  )
}
