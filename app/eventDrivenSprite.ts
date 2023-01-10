import {sprite} from './sprite';
import {ctx} from './canvas';

/**
* This file demonstrates how to update a sprite
* in response to user events. In this case, we just
* run a function on each keypress which draws the sprite
* and updates the frame it's on!
**/

// Print some instructions on the canvas :)
ctx.fillText(
  'Type any key to make sprite move :)',
  100,100
)

// Make a player object to track position and frame
let player = {
  frame : 1,
  x : 10,
  y : 10,
}

// Respond to keyboard events
window.addEventListener(
  'keydown',
  function (event) {
    // Advance one frame
    player.frame += 1; 
    // Erase the previous drawing (in most games you wouldn't bother
    // with this since you'll probably have an animation loop erasing
    // everything once a screen anyway...)
    ctx.clearRect(player.x,player.y,sprite.frameWidth,sprite.frameHeight);
    // Move our player based on the key...
    movePlayerForKey(event.key);
    // Draw the sprite!
    sprite.draw(player.x,player.y,player.frame);
  }
)

function movePlayerForKey (key) {
  if (key=='ArrowRight' || key=='l') {
      player.x += 5;
  } else if (key=='ArrowLeft' || key=='j') {
    player.x -= 5;
  } else if (key=='ArrowDown' || key=='k') {
    player.y += 5;
  } else if (key=='ArrowUp' || key=='i') {
    player.y -= 5;
  } else {
    ctx.clearRect(100,400,300,50);
    ctx.fillText(
      `Unknown key: ${key}`,
      100,400
    )
  }
  
}

