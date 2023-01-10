import {sprite} from '../sprite';

export const flyingDude = {
  x : 0,
  y : 400,
  vx : 1,
  vy: -4,
  frame : 0,
  move () {
    this.x += this.vx;
    this.y += this.vy;
    if (this.y < -64) {
      this.y = 500;
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
    flyingDude.frame += 1;
  },
  1000/24 // 24 frames per second...
)