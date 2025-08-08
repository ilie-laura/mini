import React, { useEffect } from 'react';

function Time() {
  useEffect(() => {
    const daysinMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const date = new Date();
    const daysThisMonth = daysinMonth[date.getMonth()];
    let streak = date.getDate(); // simplu: streak = ziua curentă, modifică după ce vrei tu
    const daycountMax = daysThisMonth;
    
 
    const daysContainers = document.getElementsByClassName("day");
    let daycount = 0;

    for(let i = 0; i < daysContainers.length; i++) {
      if(daycount === date.getDate() - 1) {
        daysContainers[i].innerHTML = daycount + 1;
        daysContainers[i].style.backgroundColor = "#456882";
        daysContainers[i].style.color = "white";
        daysContainers[i].style.border = "2px solid #000000ff";
      } else if(daycount < daycountMax) {
        daysContainers[i].innerHTML = daycount + 1;
        daysContainers[i].style.backgroundColor = "#f2f2f2";
        daysContainers[i].style.color = "black";
        daysContainers[i].style.border = "none";
      } else {
        daysContainers[i].innerHTML = "";
        daysContainers[i].style.backgroundColor = "#f2f2f2";
        daysContainers[i].style.color = "black";
        daysContainers[i].style.border = "none";
      }
      daycount++;
    }
  }, []);

  return null;
}

export default Time;
