import React, { useEffect, useState } from 'react';

//styling
import './Count.css';

const Count = () => {
  const [number, setNumber] = useState(0)

  useEffect(() => {
      const countUp = () => {
      let start = 0;
      let end = 0;
      if (start === end) return;
      let timer = setInterval(() => {
        start += 1;
        if (start === end) clearInterval(timer)       
        setNumber(start)
      }, (1000))
    }
    countUp()
  }, []);

  return (
    <div className="Count">
      <h3> <i>{counts[0].label}: {number}</i></h3>
    </div>
  );
}

export default Count;