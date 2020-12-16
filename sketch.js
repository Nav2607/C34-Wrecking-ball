
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var craneImg

function preload(){
craneImg = loadImage("Crane.jpg")

}

function setup() {
  createCanvas(900,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 
  ball = new Ball (150,200,30)
  sling = new Slingshot(ball.body,{x:200, y:175})
  build1_1 = new Block (450,575,100,75)
  build1_2 = new Block (450,475,100,75)
  build1_3 = new Block (450,375,100,75)
  build1_4 = new Block (450,275,100,75)
  build2_1 = new Block (550,575,100,75)
  build2_2 = new Block (550,475,100,75)
  build2_3 = new Block (550,375,100,75)
  build2_4 = new Block (550,275,100,75)
  ground= new Ground (600,585,1200,25)
}

function draw() {
  background(craneImg)
  Engine.update(engine);

  ball.display();
  sling.display();
  ground.display();
  build1_1.display();
  build1_2.display();
  build1_3.display();
  build1_4.display();
  build2_1.display();
  build2_2.display();
  build2_3.display();
  build2_4.display();

}   

function mouseDragged(){
    Body.setPosition(ball.body, {x:mouseX, y:mouseY})

}