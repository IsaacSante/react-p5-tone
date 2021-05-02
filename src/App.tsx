import React, { useState, useEffect,  useRef }  from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketches/sketch';
import { Button, Paper } from '@material-ui/core';
import * as Tone from 'tone'
const file = require('./sketches/audiofiles/Stronger.mp3');

function App() {
  const [diameter, setDiameter] = useState(100)
  const [red, setRed] = useState(100)
  const [isLoaded, setIsLoading] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [btnTxt, buttonContext] = useState("Play")

  let player = new Tone.Player({
      url:file,
      loop:false,
      onload: () => setIsLoading(true)
    }).toDestination()

    const playerRef = useRef(player);

    function playSong(){
       if(isLoaded === true){
         if(isPlaying===true){
         buttonContext("Stop")
         playerRef.current.start()
         setIsPlaying(false)
       }else if(isPlaying===false){
         buttonContext("Play")
         playerRef.current.stop()
         setIsPlaying(true)
       }
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
                      <Button className="btn btn-default" disabled={!isLoaded} onClick={playSong}>
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