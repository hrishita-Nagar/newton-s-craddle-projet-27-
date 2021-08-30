
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(620, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(300,100,300,20);

	bob1 = new Bob(200,300,25,20);
	rope1 = new Rope(bob1.body, {x:200, y:100});

	bob2 = new Bob(250,300,25,20);
	rope2 = new Rope(bob2.body, {x:250, y:100});

	bob3 = new Bob(300,300,25,20);
	rope3 = new Rope(bob3.body, {x:300, y:100});
	
	bob4 = new Bob(350,300,25,20);
	rope4 = new Rope(bob4.body, {x:350, y:100});

	bob5 = new Bob(400,300,25,20);
	rope5 = new Rope(bob5.body, {x:400, y:100});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(400,200,300);
  
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === LEFT_ARROW){
		 
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-60,y:-30})
	}

	if (keyCode === RIGHT_ARROW){
		 
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:60,y:-30})
	}
}


