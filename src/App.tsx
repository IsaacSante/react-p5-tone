import React, { useState }  from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketches/sketch';
import g from './sketches/sketch';
import { Button, Paper } from '@material-ui/core';
// import * as Tone from 'tone'
// const file = require('./audiofiles/Stronger.mp3');


// let player; 

function App() {
  const [diameter, setDiameter] = useState(100)
  const [red, setRed] = useState(100)
  const [isLoaded, setIsLoading] = useState(false)
  const [btnTxt, buttonContext] = useState("Play")
    //  player = new Tone.Player({
    //     url: file, 
    //     loop: false,
    //   }).toDestination();




     function playSong() {
      if(isLoaded === false){
            setIsLoading(true)
            buttonContext("Play")
          }else if( isLoaded === true){
            setIsLoading(false)
            buttonContext("Pause")
          }
        }
  return (
          <div className = "App">
                <div className="site">
                        <div className="title">
                              <h1>MSV17</h1>
                            </div>
                            <div className="App-cont">

                  <div className="Visuals">
                    <Paper elevation={3} >
                      <P5Wrapper sketch={sketch} diameter={diameter} red={red} isLoaded={isLoaded} />
                    </Paper>
                  </div>

                  <div className="Controls">
                      <Button className="btn btn-default"  onClick={playSong}>
                        <p>{btnTxt}</p>
                      </Button>

                        <label htmlFor="slider">
                              <input
                                  id="slider1"
                                  type="range"
                                  min={10}
                                  max={200}
                                  step={1}
                                  value={diameter}
                                  onChange={event => setDiameter(+event.target.value)}
                              />
                              {diameter}
                          </label>

                        <label htmlFor="slider">
                              <input
                                  id="slider2"
                                  type="range"
                                  min={10}
                                  max={255}
                                  step={1}
                                  value={red}
                                  onChange={event => setRed(+event.target.value)}
                              />
                              {red}
                          </label>

                    </div>
                  </div>
            </div> 
          </div>
  )
}
export default App;