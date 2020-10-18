import React, { useEffect, useState } from 'react';

//styling
import './Count.css';

const Count = props => {
  const {label, number, duration } = props.data
  const [count, setCount] = useState(0)

  useEffect(() => {
    let end = parseInt(number)
    if (count === end) return;
    let timer = setInterval(() => {
      if (count === end) clearInterval(timer)       
      setCount(count + 1)
    }, (50))
  }, []);

  return (
    <div className="Count">
      <h3><i>{label}: {count}</i></h3>
    </div>
  );
}

export default Count;