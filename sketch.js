
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
      stone1=new Stone(235,420)

  
}


function draw() {

  background("lightblue");
  rectMode(CENTER);
	Engine.update(engine);
  //drawSprites();
 stone1.display();
}



