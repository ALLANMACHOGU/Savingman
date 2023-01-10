import {sprite} from './sprite';
import {ctx,canvas} from './canvas';

let dude = {
  // position
  x : 330, 
  y : 220, 
  // which frame
  frame : 0,
  // x and y velocity
  vx : 12,
  vy : 5,
  // width and height
  w : 128,
  h : 128,
  // Simple draw method...
  draw () {
    sprite.draw(this.x,this.y,this.frame, this.w, this.h);
  },
  // Move method looks like our earlier code but adds frame
  move () {
    // Move
    this.x += this.vx;
    this.y += this.vy;
    // Update frame count
    this.frame += 1;    
    // Bounce off the right wall
    if (this.x > canvas.width - this.w) {
      this.x = canvas.width - this.w;
      this.vx = -1 * this.vx;
      // Shrink when we bounce
      this.w -= 4;
      this.h -= 4;
    }
    // Bounce off the left wall
    if (this.x < 0) {
      this.vx = -1 * this.vx;
      this.x = 0;
      // Shrink when we bounce
      this.w -= 4;
      this.h -= 4;
    }
    // Move through the top and bottom...
    if (this.y < 0) {
      this.y = canvas.height
    }
    if (this.y > canvas.height) {
      this.y = 0;
    }
    // Grow back to normal if we hit minimum size
    if (this.w < 8) {
      this.w = 128;
      this.h = 128;
    }
  }
}

const framesPerSecond = 12;

setInterval(
  ()=>{
    ctx.clearRect(dude.x,dude.y,dude.w,dude.h);
    dude.move();
    dude.draw();
  },
  1000 / framesPerSecond,
);