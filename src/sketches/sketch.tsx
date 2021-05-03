

export default function sketch(p){
    let canvas;
    let diameter = 100;
    let red = 100;
    let w = window.innerWidth/2.5;
    let playerObj = 0; 
    let analyser;

    p.myCustomRedrawAccordingToNewPropsHandler = (Props) => {
      if(canvas) {
        // diameter = Props.diameter
        // red = Props.red
        playerObj = Props.myCoolPlayer; 
        // analyser = Props.analyzeVals
      }
    }
    p.setup = async () => {
      canvas = p.createCanvas(w, w);
      p.noStroke();
    }

      p.draw = () => {
        if(playerObj === 0 || playerObj === 2)
        return
        console.log(playerObj)
        p.background(255,0,100);
        p.fill(100, 100, 100, 255)
        p.ellipse(canvas.width / 2 , canvas.width / 2, 100 );
   }


}