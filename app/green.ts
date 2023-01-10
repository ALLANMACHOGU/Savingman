import {ctx} from './canvas';

/**
* This is a basic sprite object which will make it possible for most
* of my other sprite code to work. I export an object with a draw
* method which lets me draw a given frame of the sprite at a given position
* on the canvas at will.
**/

export const img = document.createElement('img'); // Create <img> element
img.src = 'tree.png'; // Set src to filename (in /public/)
document
  .querySelector('#assets')
  .appendChild(img); // Add image to <div id="assets">


export const tree = { 
  img,// The image element itself
  frameWidth : 64,
  frameHeight: 64,
  totalFrames : 7,// The image element itself
  ready : img.complete, // true/false (is image loaded)
  draw (x,y,w,h) { // A drawing method
    if (this.ready) { // If image is loaded, draw it...
      ctx.drawImage(this.img,x,y,w,h);
    } else { // Otherwise, draw it in a moment...
      setTimeout(
        ()=>this.draw(x,y,w,h),
        200
      );
    }
  }
}

