
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function setup() {
	createCanvas(800,700);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(280,100,10,ball_options)
	World.add(world,ball)

	groundObj=new ground(15,660,1570,20)
	leftSide=new ground(540,620,20,80)
	rightSide=new ground(700,620,20,80)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  function keyPressed()
	{
		if(KeyCode(UP_ARROW))
		{
		Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},{x:0,y:-0.05})
		}
	}

  ellipse(ball.position.x,ball.position.y,40)
  groundObj.display();
  leftSide.display();
  rightSide.display();
  
  drawSprites();
 
}



