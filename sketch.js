const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1100, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new Roof(width/2,height/4,width/7,20);

	bobDiameter=40;

	SBPX=width/2;
	startBobPositionY=700/4+250;
	bobObject1=new Bob(SBPX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new Bob(SBPX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new Bob(SBPX,startBobPositionY,bobDiameter);
	bobObject4=new Bob(SBPX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new Bob(SBPX+bobDiameter*2,startBobPositionY,bobDiameter);




	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)

	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)

	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0,185,235);
  roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
 
}


function mouseDragged(){
		 Matter.Body.setPosition(bobObject1.body, {x: mouseX , y: mouseY});
	 
 }
 
 
function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position
	roofBodyOffset=constraint.pointB;
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}





