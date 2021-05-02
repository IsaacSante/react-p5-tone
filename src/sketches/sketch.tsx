import { constants } from 'node:zlib';
import * as Tone from 'tone'
const file = require('./audiofiles/Stronger.mp3');

export default function sketch(p){
    let canvas, scale ; 
    let diameter = 100;
    let red = 100;
    let incomingMeter = 0; 
    let w = window.innerWidth/2.5;
    let player; 
    let playing = false;
    // let player, meterLvl; 
    let myCoolBool; 
    //  meterLvl = new Tone.Meter();

    
    p.myCustomRedrawAccordingToNewPropsHandler = (Props) => {
      if(canvas) {
        diameter = Props.diameter
        red = Props.red
        myCoolBool = Props.isLoaded
      }
    }

    p.setup = async () => {
      canvas = p.createCanvas(w, w);
      p.noStroke();
      player = new Tone.Player({
        url: file, 
        loop: false,
      }).toDestination();
      player = new Tone.Player();
      player.loop = true;
      player.autostart = false;
      player.connect(Tone.getDestination());
      player.toDestination()
      await player.load(file)
    }

    p.draw = () => {
      if(!player) return;
        p.background(255);
        p.fill(red, red, red)
        scale = p.map(incomingMeter, -100, -30, 0, 1);
        p.ellipse(canvas.width / 2 , canvas.width / 2, diameter * scale);


   }

   p.reactBtn = () => {
    console.log("HEY KING")
    if(player && player.loaded){
        if(playing){
          playing=false;
          console.log("HEY QUEEN")
          player.stop()
        }else{
          playing=true;
          console.log("HEY KING")
          player.start()
        }
      }
    }
    let g = p.reactBtn();

    
}

  
  

