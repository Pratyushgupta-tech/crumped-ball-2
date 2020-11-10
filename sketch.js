var ground;
var paperball;
var bin,bin2,bin3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

var option={

isStatic:true

}

// creating engine and world
	engine = Engine.create();
	world = engine.world;


// giving soul to ground
ground = Bodies.rectangle(400,500,800,10,option);
World.add(world,ground);

// giving soul to bin2
bin2 = Bodies.rectangle(518,400,20,195,option);
World.add(world,bin2);

// giving soul to bin3
bin3 = Bodies.rectangle(683,400,20,195,option);
World.add(world,bin3);


// creating paperball from paper class
paperball = new BaseClass (200,200,50,50);

// creating binpart1
bin = new Bin (600,495,200,200);


Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);

//giving display to ground
fill("yellow");
rect(ground.position.x,ground.position.y,800,10);

//giving display to bin2
fill("yellow");
rect(bin2.position.x,bin2.position.y,20,190);

//giving display to bin3
fill("yellow");
rect(bin3.position.x,bin3.position.y,20,190);


// giving display to paperball
paperball.display();

//giving display binpart1
bin.display();




  drawSprites();
 
}

function keyPressed (){

if (keyCode === UP_ARROW ) {

Matter.Body.applyForce(paperball.body,paperball.body.position,{x : 85 , y : -85})

}

}
