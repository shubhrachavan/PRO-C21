
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;
let engine;

var ground;
var leftSide;
var rightSide
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 ground = new Ground(width/2,390,width,10);
	 leftSide = new Ground(400,350,10,70);
	 rightSide = new Ground(480,350,10,70)

	var ball_options={
		isStatic:false,
		resitution:0.3,
		friction:0,
		density:1.2
	};

 	 ball=Bodies.circle(400,350,10,ball_options)
	 World.add(world,ball)


	 ellipseMode(RADIUS)
	 
	Engine.run(engine);
  
	rectMode(CENTER);
}


function draw() {
  background(50);

  fill("yellow")
  ground.display();
  leftSide.display();
  rightSide.display();
  Engine.update(engine);

  fill(230)
  ellipse(ball.position.x,ball.position.y,20,);
 
  keyPressed();
  
}
function keyPressed(){
	if(keyCode==UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.06})	
	}
	if(keyCode == RIGHT_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.06,y:0})
	}
}


