//import './imageDemo';

 //Uncomment for basic image
//import {image} from './imageDemo';
//image.draw(120,110,42,42);

// Uncomment for single frame of sprite
//import {sprite} from './sprite';
//sprite.draw(50,50,0);
//sprite.draw(100,100,1)
//sprite.draw(150,150,2)

// Uncomment to see event-driven sprite
//import './eventDrivenSprite'
//import './timerDrivenSprite';

// Uncomment to see road background
//import './road';

// Uncomment to see rotating sprite...
/*
import {rotatingSprite} from './rotatingSprite';
import {ctx} from './canvas';
setInterval(
  function () {
    ctx.clearRect(155,155,200,200);
    rotatingSprite.angle += 3;
    rotatingSprite.frame += 1;
    rotatingSprite.draw();    
  },
  200
)
*/
// Uncomment to see a whole fancy animation loop with multiple objects
import './animationLoop';

// Uncomment to see a flowing tree
//import {canvas} from './canvas'
//import './green'
import {image} from './imageDemo'

