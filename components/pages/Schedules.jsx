import React from 'react'
import "..pages/../CSS/Schedules.css"

function Schedules({ day, children }) {
    return (
      <div className='schedules'>
        <h1>{day}</h1>
        {children}
      </div>
    );
  }

export default Schedules