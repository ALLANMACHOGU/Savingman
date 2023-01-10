import {rotatingSprite} from '../rotatingSprite';
import {canvas} from '../canvas';


rotatingSprite.x = 250;
rotatingSprite.y = 250;


export const rotatingDude = {
  ticksPerFrame : 10,
  updateCount : 0,
  angularMomentum : .5, // degrees per tick...
  move () {
    this.updateCount += 1; // 60 times per second...
    rotatingSprite.angle += this.angularMomentum;
    if (this.updateCount % this.ticksPerFrame == 0) {
      rotatingSprite.frame += 1;
    }
  },
  draw () {
    rotatingSprite.draw()
  }
}

// Pull our dude toward mouse movements
canvas.addEventListener(
  'mousemove',
  (e)=>{
    let dx = e.offsetX - rotatingSprite.x;
    let dy = e.offsetY - rotatingSprite.y;
    rotatingSprite.x += dx/20;
    rotatingSprite.y += dy/20;
  }
  );