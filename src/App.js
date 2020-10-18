import React from 'react';

//styling
import './App.css';

// data 
import data from './data/data.json'

//components
import Count from './components/Count';

const App = () => {
  return (
    <div className="App">
      {data.counts.map(count => <Count key={count.id} data={count}/>)}
    </div>
  );
}

export default App;
