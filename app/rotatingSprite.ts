/**
* This is a rotating sprite hello world.
**/
import {sprite} from './sprite';
import {ctx} from './canvas';

export const rotatingSprite = {
  x : 200,
  y: 200,
  width: 64,
  height: 64,
  frame : 0,
  angle : 45,
  draw () {    
    /* To rotate the sprite, we have to move the whole canvas */
    ctx.translate(this.x,this.y);
    ctx.rotate(Math.PI*2 * (this.angle/360));
    /* We then draw the sprite centered around the origin (0,0) */
    
    sprite.draw(-this.width/2,-this.height/2,this.frame,
               this.width,this.height)
    /* Finally, put the canvas back so any other drawing code works
    right */
    ctx.resetTransform();
  }
}