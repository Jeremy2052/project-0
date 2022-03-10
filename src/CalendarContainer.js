import React from 'react'
import './CalendarContainer.css'
import Calendar from 'react-calendar'
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css';

function CalendarContainer() {
  const [value, onChange] = useState(new Date());

  return (
    <div className='calendarContainer'>
      <h3>Calendar</h3>
      <Calendar
        className='calendar'
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default CalendarContainer
