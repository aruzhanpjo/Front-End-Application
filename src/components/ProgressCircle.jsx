import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ProgressCircle = ({ completedDays, totalDays }) => {
  // Calculate progress percentage
  const percentage = (completedDays / totalDays) * 100

  return (
    <div style={{ width: 150, margin: '0 auto' }}>
      <CircularProgressbar
        value={percentage}
        text={`${completedDays}/${totalDays}`}
        styles={buildStyles({
          textColor: '#fff',
          pathColor: '#0d6efd',
          trailColor: '#d6d6d6',
        })}
      />
    </div>
  )
}

export default ProgressCircle
