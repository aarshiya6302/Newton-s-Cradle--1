
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new Bob(250,400,50);
	bobObject2=new Bob(300,400,50);
	bobObject3=new Bob(350,400,50);
	bobObject4=new Bob(400,400,50);
	bobObject5=new Bob(450,400,50);

	roofObject=new Ground(380,200,300,25)
	rope1= new Rope(bobObject1.body,roofObject.body,0,0);
	rope2= new Rope(bobObject2.body,roofObject.body,0,0)
	rope3= new Rope(bobObject3.body,roofObject.body,0,0)
	rope4= new Rope(bobObject4.body,roofObject.body,0,0)
	rope5= new Rope(bobObject5.body,roofObject.body,0,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



