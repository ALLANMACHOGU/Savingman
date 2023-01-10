/**
* This module just demonstrates how to draw an image
* to the screen using Javascript
**/


import {ctx} from './canvas';


export const img = document.createElement('img'); // Create <img> element
img.src = 'smile.png'; // Set src to filename (in /public/)

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

// This final code at the bottom runs when the image
// loads and updates the ready property of our image
// object.
img.addEventListener('load',()=>{
  console.log('Image is loaded!');
  image.ready=true
});

