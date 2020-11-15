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
        'active': x === snork[0] && y === snork[1],
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
        columnData.map((row,i) => {
          return (
            <Square
              key={i}
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
  const SIZE = 10;
  let [ grid, setGrid ] = useState(setInitialGrid(SIZE));
  let [ snork, setSnork ] = useState([0,0]);
  let [ errorState, setErrorState ] = useState(false);

  useEffect(()=>{
    function handleKeyPress(e) {
      console.log('in a key press');
      const offsets = {
        'ArrowUp': [0, -1],
        'ArrowRight': [1, 0],
        'ArrowLeft': [-1, 0],
        'ArrowDown': [0, 1],
      };
      setSnork([snork[0] + offsets[e.key][0],snork[1] + offsets[e.key][1]])
      if(!errorState) {
        if(snork[0] < 0 ||
          snork[0] > SIZE-1 ||
          snork[1] < 0 ||
          snork[1] > SIZE-1) {
            setErrorState(true)
          }
      }

    }

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);

  },[snork]);

  if(errorState) {
    return <span style={{"color":"red"}}>LOSE</span>
  }
  return (

    <div
      className="App"
    >
      <h1 className="title">snork</h1>
      <div className="grid">
        {
          grid.map((col,i) => {
            return (
              <Column
                key={i}
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
