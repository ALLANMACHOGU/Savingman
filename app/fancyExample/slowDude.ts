import {sprite} from '../sprite';

export const slowDude = {
  x : 0,
  y : 111,
  vx : .1,
  frame : 0,
  move () {
    // Only move him forward on frame 5 
    if (slowDude.frame % sprite.totalFrames == 5) {
      this.x += .3;
    }
    if (this.x > 500) {
      this.x = 0;
    }
  },
  draw () {    
    sprite.draw(this.x,this.y,this.frame)
  }
}

setInterval(
  ()=>{
    slowDude.frame += 1;

  },
  1000/6 // 6 frames per second...
)