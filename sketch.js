const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a;
var circles=[];

function setup() {
  engine = Engine.create();
  world = engine.world; createCanvas(800,800);
  stroke(255)

  ground = new Ground(600,height,1200,20);

  slingShot=new Slingshot(this.polygon,{x:100,y:200});
 
  imageMode(CENTRE);
  image(polygon_img ,polygon.position.x,polygon,position.y,40,40);

  var gameState = "onSling";

  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(Blck); 
  
  if(backgroundImg)
  background(backgroundImg);

  noStroke();
  textSize(35);
  fill("white");
  text("Score: "+score,width-300,50);
Engine.update(engine);
//strokeWeight(4);
  
  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);

  this.sling = Constraint.create(options);
        World.add(world, this.sling);

  a=a-1;
 
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
  block17.display();
  block18.display();
  ground.display();
  polygon.display();
  slingShot.display();


  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  
  block13 = new Block(360,195,30,40);
  block14= new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  block9 = new Block(390,155,30,40);

  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}


function mouseDragged(){
  // if (gameState!=="launched"){
       Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
 //  }
}

function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}


function keyPressed ()
{
  if(keyCode === RIGHT_ARROW) {
    
} 
