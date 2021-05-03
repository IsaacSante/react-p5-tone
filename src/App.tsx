import React, { useState, useEffect,  useRef }  from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketches/sketch';
import { Button, Paper, Slider } from '@material-ui/core';
import * as Tone from 'tone'
const file = require('./sketches/audiofiles/Stronger.mp3');

function App() {
  const [diameter, setDiameter] = useState(100)
  const [red, setRed] = useState(100)
  // const [volumeVal, setVolumeValue] = useState(0);
  const [fxAmount, fxSetValue] = useState(0);
  const [myCoolPlayer, sendPlayer] = useState({});
  // const [analyzeVals, setAnalyzeVals] = useState(0);
  const [isLoaded, setIsLoading] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [btnTxt, buttonContext] = useState("Play")

  const player = new Tone.GrainPlayer({
      url:file,
      loop:false,
      onload: () => setIsLoading(true)
    }).toDestination()


    const meter = new Tone.Meter();
    player.connect(meter)
    const playerRef = useRef(player);

    useEffect(() => {
      // playerRef.current.volume.value = volumeVal;
      playerRef.current.detune = fxAmount;
    }, [fxAmount]);

    // console.log(meter)

     useEffect(() => {
      if(isLoaded && !isPlaying){
      sendPlayer(myCoolPlayer => meter)
      }else if(isLoaded && isPlaying){
        sendPlayer(0)
      }else{
        sendPlayer(0)
      }
     }, [isLoaded, isPlaying, myCoolPlayer, meter]);



  // }, [volumeVal, fxAmount, myCoolPlayer, meter]);

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setAnalyzeVals(analyzeVals =>  meter.getValue());
    //   }, 1000);
    //   return () => clearInterval(interval);
    // }, []);


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
                      <P5Wrapper sketch={sketch} diameter={diameter} red={red} isLoaded={isLoaded} myCoolPlayer={myCoolPlayer}/>
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
{/* 
                          <label htmlFor="slider">
                              <input
                                  id="volume"
                                  type="range"
                                  min={-20}
                                  max={12}
                                  step={0.1}
                                  value={volumeVal}
                                  onChange={event => setVolumeValue(+event.target.value)}
                              />
                              {volumeVal}
                          </label> */}

                          <label htmlFor="slider">
                              <input
                                  id="fxAmount"
                                  type="range"
                                  min={0}
                                  max={200}
                                  step={10}
                                  value={fxAmount}
                                  onChange={event => fxSetValue(+event.target.value)}
                              />
                              {fxAmount}
                          </label>

                    </div>
                  </div>
            </div> 
          </div>
  )
}
export default App;