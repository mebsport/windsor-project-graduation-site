import React from 'react'
import { useMemo } from 'react'

import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isSameDay,
  isToday,
  startOfMonth,
} from 'date-fns'
import clsx from 'clsx'

const WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const SMALLWEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

interface Event {
  date: Date
  title: string
}

interface EventCalendarProps extends Array<Event> {
  events: Event[]
}

const EventCalendar = (events: EventCalendarProps) => {
  const currentDate = new Date()
  const firstDayOFMOnth = startOfMonth(currentDate)
  const lastDayOfMonth = endOfMonth(currentDate)

  const daysInMonth = eachDayOfInterval({
    start: firstDayOFMOnth,
    end: lastDayOfMonth,
  })

  const startingDayIndex = getDay(firstDayOFMOnth)

  const eventList = Array.from(events)

  return (
    <div className='text-black'>
      <div className='mb-4'>
        <h2 className='text-black font-bold text-center'>
          {format(currentDate, 'MMMM yyyy')}
        </h2>
      </div>
      <div className='md:grid hidden grid-cols-7 gap-2'>
        {WEEKDAYS.map((day, index) => (
          <div key={index} className='text-center font-bold'>
            {day}
          </div>
        ))}
        {Array.from({ length: startingDayIndex }).map((_, index) => {
          return (
            <div
              key={`empty-${index}`}
              className='border rounded-md text-center'
            />
          )
        })}
        {daysInMonth.map((day, index) => {
          return (
            <div
              key={index}
              className={clsx('border rounded-md text-center', {
                'bg-gray-200': isToday(day),
                'text-gray-900': isToday(day),
              })}
            >
              {format(day, 'd')}
              {/* {
                eventList.filter((event) => isSameDay(event.date, day))
                .map((event) => {
                    return <div key={event.title}>{event.title}</div>;
                })} */}
            </div>
          )
        })}
      </div>
      {/* FOR SMALL SCREENS */}
      <div className='md:hidden grid grid-cols-7 gap-2'>
        {SMALLWEEKDAYS.map((day, index) => (
          <div key={index} className='text-center font-bold'>
            {day}
          </div>
        ))}
        {Array.from({ length: startingDayIndex }).map((_, index) => {
          return (
            <div
              key={`empty-${index}`}
              className='border rounded-md text-center'
            />
          )
        })}
        {daysInMonth.map((day, index) => {
          return (
            <div key={index} className='border rounded-md text-center'>
              {format(day, 'd')}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EventCalendar
