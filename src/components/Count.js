import React, { useEffect, useState } from 'react';

//styling
import './Count.css';

const Count = props => {
  // label of counter
  // number to increment to
  // duration of count in seconds
  const {label, number, duration } = props.data

  // number displayed by component
  const [count, setCount] = useState("0")

  useEffect(() => {
    let start = 0;
    // first three numbers from props
    const end = parseInt(number.substring(0,3))
    // if zero, return
    if (start === end) return;

    // find duration per increment
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    // timer increments start counter 
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3))
      if (start === end) clearInterval(timer)       
    }, incrementTime);

    // dependency array
  }, [number, duration]);

  return (
    <div className="Count">
      <h3>
        <i>{label}: {count}</i>
      </h3>
    </div>
  );
}

export default Count;