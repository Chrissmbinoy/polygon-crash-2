class Box2{
    constructor(x, y, width, height) {
        var options = {
           isStatic:false,
           'restitution':1.0,
            'friction':1.0,
            'density':1.0
        }
        this.Visibility = 255;
        this.body = Bodies.rectangle(x, y,40,50, options);
        this.width = 30;
        this.height = 40;
     
        World.add(world, this.body);
      }
      display(){
      if(this.body.speed<3){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("pink")
        rect( 0, 0,40,50);
        pop();
      } else{
        World.remove(world,this.body)
        push();
        this.Visibility = this.Visibility-1
        tint(255,this.Visibility)
      
        pop();

      }
        
      }
}