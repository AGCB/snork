import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './App.scss';

function setInitialGrid(size) {
  let output = [];
  for(let y = 0; y < size; y++) {
    let col = [];
    for (let x = 0; x < size; x++) {
      col.push({
        x,
        y,
        active: Math.random() > .3,
        hasFood: false,
      })
    }
    output.push(col);
  }
  return output;
}

function Square({squareData: {active, hasFood}}) {
  return (
    <div className={classNames({
      'square': true,
      'active': active,
      'food': hasFood,
    })}>
    </div>
  )
}
function Column({columnData}) {
  return (
    <div className="column">
      {
        columnData.map(row => {
          return <Square squareData={row}/>
        })
      }
    </div>
  )
}
function App() {
  let [ grid, setGrid ] = useState(setInitialGrid(10));
  let [ snork, setSnork ] = useState([[0,0],[15,0]]);
  return (
    <div className="App">
      <h1 className="title">snork</h1>
      <div className="grid">
        {
          grid.map(col => {
            return (
              <Column columnData={col} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
