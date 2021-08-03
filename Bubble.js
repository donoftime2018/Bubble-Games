class Bubble
{
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.r = Math.floor(Math.random()*(50-40))+40
        this.col = color(random(255), random(255), random(255))
      } 
        
      display() {
        stroke(0)
        fill(this.col);
        circle(this.x,this.y, this.r);
      }
        
      move(){
        this.x = this.x+random(sin(2), sin(-2));
        this.y = this.y+random(sin(2), sin(-2)); 
      }
        
}