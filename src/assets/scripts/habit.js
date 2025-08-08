import React, { useState } from 'react';

function Habit() {
  const [habit, setHabit] = useState("Activity");

  const updateHabit = () => {
    const newHabit = prompt("Enter your activity for today:", habit);
    if (!newHabit || newHabit.length === 0) {
      alert("Please enter a valid activity.");
    } else {
      setHabit(newHabit);
      console.log("Activity updated to: " + newHabit);
    }
  };

  return (
    <p id="habit" onClick={updateHabit} style={{ cursor: 'pointer' }}>
      {habit}
    </p>
  );
}

export default Habit;
