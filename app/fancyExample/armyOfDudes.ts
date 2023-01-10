import {canvas} from '../canvas';
import {sprite} from '../sprite';

export const armyOfDudes = {
  army : [
    {x:10,y:10},    
  ],
  frame : 0,
  move () {
    this.army.forEach(
      (position) => {
        position.x += 1;
        position.y += 1;
        if (position.x > canvas.width) {
          position.x = 0;
        }
        if (position.y > canvas.height) {
          position.y = 0;
        }
      }
    )
  },
  draw () {
    this.army.forEach(
      (position) => {
        sprite.draw(
          position.x,
          position.y,
          this.frame,
          32, // w
          32, // h
        )
      }
    )
  }
}

for (let x=0; x<10; x++) {
  for (let y=0; y<10; y++) {
    armyOfDudes.army.push(
      {x : x * 36,
       y : y*36}
    )
  }
}

setInterval(
  function () {
    armyOfDudes.frame += 1
  },
  1000/12 // 12 times a second
)