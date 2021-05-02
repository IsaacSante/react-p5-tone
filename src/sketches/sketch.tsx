export default function sketch(p){
    let canvas;
    let diameter = 100;
    let red = 100;
    let w = window.innerWidth/2.5;

    p.myCustomRedrawAccordingToNewPropsHandler = (Props) => {
      if(canvas) {
        diameter = Props.diameter
        red = Props.red
      }
    }

    p.setup = async () => {
      canvas = p.createCanvas(w, w);
      p.noStroke();

    }

    p.draw = () => {
        p.background(255, 1);
        p.fill(100, 200, 100, red)
        p.ellipse(canvas.width / 2 , canvas.width / 2, diameter * 2);
   }

 
}

  
  

