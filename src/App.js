import React, { useState, useEffect } from 'react';
import './App.scss';

function App() {

    // which way is snork facing?
    let [direction, setDirection ] = useState('right');
    //
    // snork is an array of 2element arrays representing X/Y coords.
    // snork starts with a length of 2
    let [ snork, setSnork ] = useState([[0,0], [10.5,0]])
    //
    //
    let [ incrementer, setIncrementer ] = useState(0) // for fun.

    // snork listens for up/down/left/right keys
    useEffect(() => {
      const handleKeyPress = (e) => {
        if ( e.key === 'ArrowLeft') {
          console.log('left arrow');
          setDirection('left');
        }
        if ( e.key === 'ArrowRight') {
          console.log('right arrow');
          setDirection('right');
        }
        if ( e.key === 'ArrowUp') {
          console.log('up arrow');
          setDirection('up');
        }
        if ( e.key === 'ArrowDown') {
          console.log('down arrow');
          setDirection('down');
        }
      }
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    })


    useEffect(()=> {
      const offsetMap = {
        "right": [15,0],
        "up": [0, -15],
        "down": [0, 15],
        "left": [-15, 0],
      };
      const snorkInterval = setInterval(()=>{
        console.log('we are in an interval');
        // ... to log the incrementer.
        setIncrementer(incrementer++)

        // currentOffset is nice since I don't have to
        // create individual if()'s for up/down/left/right.
        //
        let currentOffset = offsetMap[direction];
        let segments = snork.map(seg => {
          return [seg[0]+currentOffset[0], seg[1]+currentOffset[1]]
        });
        setSnork(segments);

      },150);
      return () => clearInterval(snorkInterval);
    },[snork])

  return (
    <div className="App">
      <h1>snork</h1>
      <h2>snork stats</h2>
      <p className="incrementer">{incrementer}</p>
      <div className="snork">
        {
          snork.map(segment => {
            return (
              <div
                className="segment"
                style={{"position": "absolute",
                  "left": String(segment[0])+"px",
                  "top": String(segment[1])+"px",
                  "width": "10px",
                  "height": "10px",
                }}>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
