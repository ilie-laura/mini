import React, { useEffect, useState } from 'react';

function StreakDisplay() {
  const [streak, setStreak] = useState(0);
  const [daysInMonth, setDaysInMonth] = useState(30); 

  useEffect(() => {
    const today = new Date();
    const todayStr = today.toISOString().slice(0, 10); // ex: "2025-08-08"

 const daysInMonthCalc = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    setDaysInMonth(daysInMonthCalc);

    const storedDatesJSON = localStorage.getItem('activityDates');
    const storedDates = storedDatesJSON ? JSON.parse(storedDatesJSON) : [];

    const hasToday = storedDates.includes(todayStr);
    setStreak(hasToday ? 1 : 0);
  }, []);

  return (
    <p style={{ fontWeight: 'italic' }}>
      Streak: {streak+1} day{streak !== 1 ? 's' : ''} / {daysInMonth}
    </p>
  );
}

export default StreakDisplay;
