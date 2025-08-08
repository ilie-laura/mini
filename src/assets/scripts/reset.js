import React, { useState } from 'react';

function Reset() {
  const [streak, setStreak] = useState(0);

  const reset = () => {
    localStorage.removeItem('activityDates'); 
    setStreak(0);

  };
  const days = document.querySelectorAll('.day');
  days.forEach(day => {
    day.style.backgroundColor = '#EAC8A6'; 
    day.style.color = 'black';
    day.style.border = 'none';
    day.innerHTML = ''; 
  });

}

export default Reset;
