
var target1,target2,target3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	ball1= new ball(200,50,40);

	ground1 =new ground (width/2,670,width,20);

	target1 = createSprite(1200,650,200,20);
	target1.shapeColor = "red";

	target2 = createSprite(1300,610,20,100);
	target2.shapeColor = "red";

	target3 = createSprite(1100,610,20,100);
	target3.shapeColor = "red";


	
	

	//Create the Bodies Here.
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ground1.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
	}
}