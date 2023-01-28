class Bubble
{
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.r = Math.floor(Math.random()*(50-45)+45)
        this.col = color(random(255), random(255), random(255))
      } 
        
      display() {
        stroke(0)
        fill(this.col);
        circle(this.x,this.y, this.r);
        line(this.x+5, this.y+1, this.x+14, this.y+10)
      }
        
      move(){
        min = Math.ceil(0)
        max = Math.floor(1)
        let direction = Math.floor(Math.random() * (max - min + 1) + min)

        if (direction === 1)
        {
          this.x = this.x+Math.random(sin(11), sin(-11));
          this.y = this.y+Math.random(sin(11), sin(-11)); 
        }

        else
        {
          this.x = this.x-Math.random(sin(11), sin(-11));
          this.y = this.y-Math.random(sin(11), sin(-11));
        }

      }

      isClicked(x, y)
      {
        if (dist(x, y, this.x, this.y) < this.r)
        {
          return true;
        }

        return false;
      }

      

      
}