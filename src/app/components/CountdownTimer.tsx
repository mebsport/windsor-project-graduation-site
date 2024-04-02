'use client'
import React, { useEffect, useState } from 'react'

const CountdownTimer = () => {
  const [partyTime, setPartyTime] = useState(false)

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date('06/11/2024 18:00:00')

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(m)

      const s = Math.floor((difference % (1000 * 60)) / 1000)
      setSeconds(s)

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true)
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className='mt-4 text-black p-8 border-2 border-black border-radius rounded-md z-10'>
      {partyTime ? (
        <h1 className='font-bold text-4xl text-center '>
          Congrats Windsor High School Class Of 2024!
        </h1>
      ) : (
        <div>
          <h1 className='justify-center text-xl md:text-2xl text-center font-bold'>
            WHS Class Of 2024 Graduation Countdown
          </h1>
          <div className='justify-center text-2xl md:text-4xl font-bold flex border-2 p-8 bg-opacity-15 bg-gray-400 rounded-md'>
            <div className='flex flex-col text-center md:pl-4 md:pr-4 pl-2 pr-2'>
              <span className='text-2xl md:text-4xl'>{days}</span>
              <span className='text-xl'>Days</span>
            </div>
            <span className=''>:</span>
            <div className='flex flex-col text-center md:pl-4 md:pr-4 pl-2 pr-2'>
              <span className='text-2xl md:text-4xl'>{hours}</span>
              <span className='text-xl'>Hours</span>
            </div>
            <span className='divider'>:</span>

            <div className='flex flex-col text-center md:pl-4 md:pr-4 pl-2 pr-2'>
              <span className='text-2xl md:text-4xl'>{minutes}</span>
              <span className='text-xl'>Minutes</span>
            </div>
            <span className='divider'>:</span>

            <div className='flex flex-col text-center md:pl-4 md:pr-4 pl-2 pr-2'>
              <span className='text-2xl md:text-4xl'>{seconds}</span>
              <span className='text-xl'>Seconds</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CountdownTimer
