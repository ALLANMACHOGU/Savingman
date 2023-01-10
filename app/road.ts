/**
* This file demonstrates how to create a simple scrolling
* background.
**/
import {canvas} from './canvas';

canvas.style.backgroundImage = `url('road.png')`;

// Initial y positon of background (my background goes up and down,
// if you're background went horizontally you'd change this to X)
let y = 0;
// The maximum y offset for our image
let maxy = 4500;

function updateBackground () {
  // Just move y up one pixel
  y += 1;
  // If we're past the max, reset to 0
  if (y > maxy) {
    y = 0;
  }
  // Apply the y value to our background position
  canvas.style.backgroundPositionY = `${y}px`;
}

// How many pixels do we move per second...
const pixelsPerSecond = 200;

// Run updateBackground on a timer...
setInterval(
  updateBackground,
  1000 / pixelsPerSecond,
);


