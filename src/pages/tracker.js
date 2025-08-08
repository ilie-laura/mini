import React from 'react'
import TrackerLogo from '../assets/trackerLogo.png';
import '../styles/tracker.css';
function Tracker() {
  return (
    <div >
       
        <h1 id="title">Tracker Page</h1>
        <h2 id="subtitle">Track your progress</h2>
        <div id="calendar">
            <div id="calendarDiv">
                <div id="calendarHeader">
                    <p id="habit">Activity </p>
                    <p id="time">Time </p>
                </div>
           
            <div id="calendarContent">
                <div className="calendarItem">
                    <div className='days'>
                        <div className='day'>Mon</div>
                        <div className='day'>Tue</div>
                        <div className='day'>Wed</div>
                        <div className='day'>Thu</div>
                        <div className='day'>Fri</div>
                        <div className='day'>Sat</div>
                        <div className='day'>Sun</div>
                    </div>
                </div>
                   <div className="calendarItem">
                    <div className='days'>
                        <div className='day'>Mon</div>
                        <div className='day'>Tue</div>
                        <div className='day'>Wed</div>
                        <div className='day'>Thu</div>
                        <div className='day'>Fri</div>
                        <div className='day'>Sat</div>
                        <div className='day'>Sun</div>
                    </div>
                </div>
                   <div className="calendarItem">
                    <div className='days'>
                        <div className='day'>Mon</div>
                        <div className='day'>Tue</div>
                        <div className='day'>Wed</div>
                        <div className='day'>Thu</div>
                        <div className='day'>Fri</div>
                        <div className='day'>Sat</div>
                        <div className='day'>Sun</div>
                    </div>
                </div>
                   <div className="calendarItem">
                    <div className='days'>
                        <div className='day'>Mon</div>
                        <div className='day'>Tue</div>
                        <div className='day'>Wed</div>
                        <div className='day'>Thu</div>
                        <div className='day'>Fri</div>
                        <div className='day'>Sat</div>
                        <div className='day'>Sun</div>
                    </div>
                </div>
                   <div className="calendarItem">
                    <div className='days'>
                        <div className='day'>Mon</div>
                        <div className='day'>Tue</div>
                        <div className='day'>Wed</div>
                        <div className='day'>Thu</div>
                        <div className='day'>Fri</div>
                        <div className='day'>Sat</div>
                        <div className='day'>Sun</div>
                    </div>
                </div>
            </div> 
        </div>
     </div>
     <button id="trackButton">Reset Now</button>
    </div>
  )
}


export default Tracker
