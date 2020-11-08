class Polygon {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:1,
          density:10.2


      }
      this.x=x;
          this.y=y;
          this.r=r
          this.body=Bodies.circle(this.x, this.y, (this.r)/3, options)
          this.image = loadImage("sprites/pol.png")
        World.add(world, this.body);
      }
      display(){
        
          var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r,this.r);
      pop();
      
  
      }
    };
