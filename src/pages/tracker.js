import React from 'react'
import TrackerLogo from '../assets/trackerLogo.png';
import '../styles/tracker.css';
import { useEffect } from 'react';
import track from '../assets/scripts/track.js';
import Habit from '../assets/scripts/habit.js';
import Time from '../assets/time.js';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StreakDisplay from '../assets/scripts/check/uncheck.js';
import Reset from '../assets/scripts/reset.js';
function Tracker() {
      useEffect(() => {
    
    track();
  }, []);
 
  return (
    <div >
       <CalendarMonthIcon /> <Time />
        <h1 id="title">Tracker Page</h1>
        <h2 id="subtitle">Track your progress</h2>
        <div id="calendar">
            <div id="calendarDiv">
                <div id="calendarHeader">
                    <Habit />
                    <p id="habit"> </p>
                    <StreakDisplay />
                    <p id="time"> </p>
                </div>
           
            <div id="calendarContent">
                <div className="calendarItem">
                    <div className='days'>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                    </div>
                </div>
                   <div className="calendarItem">
                    <div className='days'>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                    </div>
                </div>
                   <div className="calendarItem">
                    <div className='days'>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                    </div>
                </div>
                   <div className="calendarItem">
                    <div className='days'>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                    </div>
                </div>
                   <div className="calendarItem">
                    <div className='days'>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                        <div className='day'>1</div>
                    </div>
                </div>
            </div> 
        </div>
     </div>
     <Reset />
     <button id="trackButton">Reset Now</button>
     <track />
    </div>
  )
}


export default Tracker;
