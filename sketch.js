var helicopterIMG, helicopterSprite, packageSprite,packageIMG,bar1,bar2,bar3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	bar1 = Bodies.rectangle(width/2,300,width,20,{isStatic:true} );
	bar1 = createSprite(width/2,300,10,20);
	World.add(world,bar1);

	bar2 = Bodies.rectangle(width/2,360,width,30,{isStatic:true} );
	bar2 = createSprite(width/2,330,10,20);
	World.add(world,bar2);

	bar3 = Bodies.rectangle(width/2,440,width,40,{isStatic:true} );
	bar3 = createSprite(width/2,318,10,20);
    World.add(world,bar3);
	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(255,255,0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  bar1.display();
  bar2.display();
  bar3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



