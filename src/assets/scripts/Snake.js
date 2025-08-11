import React, { useEffect, useRef } from 'react'

function Snake() {
  const canvasRef = useRef(null);
  const xv = useRef(0), yv = useRef(0);
  const px = useRef(10), py = useRef(10);
  const ax = useRef(15), ay = useRef(15);
  const gs = 20, tc = 20;
  const trail = useRef([]);
  const tail = useRef(5);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function keyPush(event) {
      switch(event.keyCode) {
        case 38: // ArrowUp
          yv.current = -1;
          xv.current = 0;
          break;
        case 40: // ArrowDown
          yv.current = 1;
          xv.current = 0;
          break;
        case 37: // ArrowLeft
          yv.current = 0;
          xv.current = -1;
          break;
        case 39: // ArrowRight
          yv.current = 0;
          xv.current = 1;
          break;
        default:
          break;
      }
    }

    function gameLoop() {
      ctx.fillStyle = "black";
      ctx.fillRect(0,0,canvas.width, canvas.height);

      px.current += xv.current;
      py.current += yv.current;

      if(px.current < 0) px.current = tc - 1;
      if(px.current > tc - 1) px.current = 0;
      if(py.current < 0) py.current = tc - 1;
      if(py.current > tc - 1) py.current = 0;

      ctx.fillStyle = "lime";
      for(let i = 0; i < trail.current.length; i++) {
        ctx.fillRect(trail.current[i].x * gs, trail.current[i].y * gs, gs - 2, gs - 2);
        if(trail.current[i].x === px.current && trail.current[i].y === py.current) {
          tail.current = 5;
        }
      }

      trail.current.push({x: px.current, y: py.current});
      while(trail.current.length > tail.current) {
        trail.current.shift();
      }

      if(ax.current === px.current && ay.current === py.current) {
        tail.current++;
        ax.current = Math.floor(Math.random() * tc);
        ay.current = Math.floor(Math.random() * tc);
      }

      ctx.fillStyle = "red";
      ctx.fillRect(ax.current * gs, ay.current * gs, gs - 2, gs - 2);
    }

    document.addEventListener("keydown", keyPush);
    const interval = setInterval(gameLoop, 1000 / 15);

    return () => {
      document.removeEventListener("keydown", keyPush);
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Snake Game</h1>
      <p>Use the arrow keys to move the snake and eat the food!</p>
      <canvas ref={canvasRef} id="gameCanvas" width="400" height="400" tabIndex={0}></canvas>
    </div>
  )
}

export default Snake;
