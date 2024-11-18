import Header from './components/Header'
import Overview from './components/Overview'
import HabitDisplay from './components/HabitDisplay'
import ProgressCircle from './components/ProgressCircle'

import { Row, Col, Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'

import Typed from 'typed.js'

function App() {
  const [completedDays, setCompletedDays] = useState(0) // Number of days completed
  const totalDays = 75 // Total days in the challenge

  const handleRestart = () => {
    setCompletedDays(0);  // Reset completed days to 0
    // If using Redux, you can dispatch an action to reset the data in global state
    // dispatch(resetDays()); // Implement the resetDays action in your Redux slice
  };

  // Function to simulate marking a day as completed
  const handleDayCompletion = () => {
    if (completedDays < totalDays) {
      setCompletedDays(completedDays + 1) // Increment completed days
    }
  }

  // code for typed.js library
  useEffect(() => {
    const typed = new Typed('.tag', {
      strings: [
        "...okay. Let's start by tracking a habit for next extraordinary 75 days.",
        "It's never too late to develop good habits.",
        'Remember to use SMART goals.',
        'Motivation is what gets you started. Habit is what keeps you going.',
        'Habits change into character.',
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 2000,
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 5000,
      loop: true,
    })

    // Destroying
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Row className='mt-5'>
          <Col md={3}>
            {/* Overview component */}
            <Overview />
          </Col>
          <Col md={9}>
            {/*  HabitDetails Component*/}
            <HabitDisplay />
          </Col>
          {/* <Col md={3} className='text-center'>
            <ProgressCircle completedDays={completedDays} totalDays={totalDays} />
            <button
              className='btn btn-primary mt-3'
              onClick={handleDayCompletion}
            >
              Mark Day Completed
            </button>
          </Col> */}
        </Row>
        <Row className='d-flex align-items-center mt-5'>
          <Col xs={3} className="d-flex flex-column align-items-center">
            {/* Restart Button */}
            <button
              className="btn btn-danger mb-3"
              onClick={handleRestart}
            >
              Restart
            </button>
            {/* Progress Circle */}
            <ProgressCircle completedDays={completedDays} totalDays={totalDays} />
            <button
              className="btn btn-primary mt-3"
              onClick={handleDayCompletion}
            >
              Mark Day Completed
            </button>
          </Col>
          <Col xs={9}>
            {/* Strings from Typed.js */}
            <h4 className='text-light'>
              <span className='tag'></span>
            </h4>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
