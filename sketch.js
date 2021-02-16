const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var stand;
var engine, ground, shape;
var polygon1;
var sling, world;
var Score=0;

function preload(){
    shape = loadImage("polygon.png")
}

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	//engine = Engine.create();
	//world = engine.world;
	
 ground=createSprite(400,400,230,20)
ground=new Ground(400,400,230,20)
 	World.add(world, ground);

 	block1= new Block(310,370,30,40)

block2=new Block(340,370,30,40)
block3=new Block(370,370,30,40)
block4=new Block(400,370,30,40)
block5=new Block(430,370,30,40)
block6=new Block(460,370,30,40)
block7=new Block(490,370,30,40)
block8=new Block(340,330,30,40)
block9=new Block(370,330,30,40)
block10=new Block(400,330,30,40)
block11=new Block(430,330,30,40)
block12=new Block(460,330,30,40)
block13=new Block(370,290,30,40)
block14=new Block(400,290,30,40)
block15=new Block(430,290,30,40)
block16=new Block(400,250,30,40)
polygon1=new Polygon(100,200,20)
slingShot =new SlingShot (polygon1.body,{x:130,y:200})
score=0;
	
	
	sling =new SlingShot (polygon1.body,{x:130,y:200})

Engine.run(engine);
	
  
}


function draw() {
	background("red");
Engine.update(engine);
  //rectMode(CENTER);
  textSize(30);
  fill("yellow")
  text("Press space to play again",700,350);
  text("SCORE:"+score,700,30)


 
 
 ground=createSprite(400,400,230,20)
  
 polygon1.display();
  
 sling.display();
  
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();

  ground.display();

  drawSprites();
 
}
 
   
  function mouseDragged(){
	Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
	
	
	}
 	function mouseReleased (){
	sling.fly();
	
  }

  function keyPressed(){
	if(keyCode=== 32){
	  
	 // Matter.Body.setPosition(circle.body,{x:130,y:200});
	  sling.attach(polygon1.body);
	}
  }

  async function getTime()
  {
      var response = await fetch("https://worldclockapi.com/api/json/est/now");
      var responseJSON = await response.json();
      console.log(responseJSON)
  }