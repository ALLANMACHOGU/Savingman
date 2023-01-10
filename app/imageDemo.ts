/**
* This module just demonstrates how to draw an image
* to the screen using Javascript
**/


import {ctx,canvas} from './canvas';


export const img = document.createElement('img'); // Create <img> element
img.src = 'tree.png'; // Set src to filename (in /public/)

// This next code assumes we have a <div id="assets"> in our index.html
document
  .querySelector('#assets')
  .appendChild(img); // Add image to <div id="assets">

// Export an object for managing our image...
// In addition to having the image element, the object will
// have a ready property to tell us if the image is loaded
// and a draw method which draws it.

export const image = { 
  img,// The image element itself
  frameWidth : 32,
  frameHeight: 32,
  totalFrames : 7,// The image element itself
  ready : img.complete, // true/false (is image loaded)
  draw (x,y,w,h,frame) { // A drawing method
    debugger
    if (this.ready) { // If image is loaded, draw it...
      console.log('frame',frame,'Drawing image',
                 this.img, // image Element
        0, // Source X
        this.frameHeight * frame, // Source Y
        this.frameWidth, // Source width
        this.frameHeight, // Source Height
        x, // Target X
        y, // Target Y
        w, // Target width
        h // Target Height
                  );
      frame = frame % this.totalFrames
      ctx.drawImage(
        this.img, // image Element
        this.frameWidth * frame, // Source X
        0, // Source Y
        this.frameWidth, // Source width
        this.frameHeight, // Source Height
        x, // Target X
        y, // Target Y
        w, // Target width
        h // Target Height
      );  
    } else { // Otherwise, draw it in a moment...
      setTimeout(
        ()=>this.draw(x,y,w,h,frame),
        200
      );
    }
  }
}

// This final code at the bottom runs when the image
// loads and updates the ready property of our image
// object.
img.addEventListener('load',()=>{
  console.log('Image is loaded!');
  image.ready=true
});



export let tree = {
  // position
  x : 330, 
  y : 220, 
  // which frame
  frame : 0,
  // x and y velocity
  vx : 1,
  vy : 1,
  // width and height
  w : 128,
  h : 128,
  // Simple draw method...
  draw () {
    image.draw(this.x,this.y, this.w, this.h,this.frame);
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

const framesPerSecond = 7;

setInterval(
  ()=>{
    
    ctx.clearRect(tree.x-20,tree.y-20,tree.w+40,tree.h+40);
    tree.frame += 1;
    tree.draw();
  },
  1000 / framesPerSecond,
);


