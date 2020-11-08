import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './App.scss';

function setInitialGrid(size) {
  let output = [];
  for(let x = 0; x < size; x++) {
    let col = [];
    for (let y = 0; y < size; y++) {
      col.push({
        x,
        y,
        active: false,
        hasFood: false,
      })
    }
    output.push(col);
  }
  return output;
}

function Square({ squareData, snork, setSnork }) {
  const { active, hasFood, x, y } = squareData;
  return (
    <div
      className={classNames({
        'square': true,
        'active': x === snork[0] && y == snork[1],
        'food': hasFood,
        })
      }
      onClick={e => {
        console.log(squareData);
      }}
      >
    </div>
  )
}

function Column({columnData, snork, setSnork}) {
  return (
    <div className="column">
      {
        columnData.map(row => {
          return (
            <Square
              squareData={row}
              snork={snork}
              setSnork={setSnork}
            />
          )
        })
      }
    </div>
  )
}

function App() {
  let [ grid, setGrid ] = useState(setInitialGrid(10));
  let [ snork, setSnork ] = useState([0,0]);

  return (
    <div className="App">
      <h1 className="title">snork</h1>
      <div className="grid">
        {
          grid.map(col => {
            return (
              <Column
                columnData={col}
                snork={snork}
                setSnork={setSnork}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
