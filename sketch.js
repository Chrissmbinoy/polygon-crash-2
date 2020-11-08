const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground,base1,base2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var box10,box11,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21;
var box22,box23,box24;
var box25;
var box26,box27,box28,box29,box30;
var box31,box32,box33;
var box34;
var polygon;
var slingShot;
function setup() {
  createCanvas(1600,700);

  engine = Engine.create();
  world = engine.world;
ground = new Ground(800,690,1600,20);
base1 = new Ground(800,580,400,20);
base2 = new Ground(1200,300,250,20);

//base 1 level 1;

box1 = new Box(640,545);
box2 = new Box(680,545);

box3 = new Box(720,545);
box4 = new Box(760,545);
box5 = new Box(800,545);
box6 = new Box(840,545);
box7 = new Box(880,545);
box8 = new Box(920,545);
box9 = new Box(960,545);
//base 1 level 2;
box10 = new Box2(680,495);
box11 = new Box2(720,495);
box12= new Box2(760,495);
box13 = new Box2(800,495);
box14 = new Box2(840,495);
box15 = new Box2(880,495);
box16= new Box2(920,495);
//base 1 level 3;
box17 = new Box3(720,445);
box18= new Box3(760,445);
box19 = new Box3(800,445);
box20 = new Box3(840,445);
box21 = new Box3(880,445);
//base 1 level 4;
box22= new Box4(760,395);
box23 = new Box4(800,395);
box24 = new Box4(840,395);
//base 1 level 5;
box25 = new Box5(800,345);
//base 2 level 1;
box26 = new Box(1120,265);
box27= new Box(1160,265);
box28 = new Box(1200,265);
box29 = new Box(1240,265);
box30 = new Box(1280,265);
//base 2 level 2;
box31= new Box2(1160,225);
box32 = new Box2(1200,225);
box33 = new Box2(1240,225);
//base 2 level 3;
box34 = new Box3(1200,185);


polygon = new Polygon(220,445,70)

slingShot = new Slingshot(polygon.body,{x:220,y:445})
keyPressed();
}

function draw() {
  background(0);  
 Engine.update(engine)
ground.display();
base1.display();
base2.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
box27.display();
box28.display();
box29.display();
box30.display();
box31.display();
box32.display();
box33.display();
box34.display();
polygon.display();
slingShot.display();

}
function mouseDragged(){

  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})    
  }
  
  function mouseReleased(){
  
      slingShot.fly()
  }
  function keyPressed(){

    if(keyCode === 32){
   
       
       slingShot.attach(polygon.body)
   
    }   
   
   }