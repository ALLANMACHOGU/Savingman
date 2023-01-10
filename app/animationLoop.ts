/**
* For this example, I'm going to show how a more complex bit of 
* code might typically work. In this case, we're going to have all
* of our *drawing* done by one animation loop, but the updates will
* happen independently.
**/

import {ctx,canvas} from './canvas';
import {tree} from './imageDemo'
function animate () {
tree.move();
  
  window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);



/** // for later
import {ctx,canvas} from './canvas';
import { 
  dudes
  } from './fancyExample/';

console.log('Got me a dude',dudes)
let objects = [
  dudes.armyOfDudes,
  dudes.flyingDude,
  dudes.rotatingDude,
  dudes.slowDude,
]

function animate () {

  );
  window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);
**/