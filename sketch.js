const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var pb
var cb
var play
var comp

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
pb = new playerBase(300,random(450,height-300),180,150)
play = new player(285,pb.body.position.y-153,50,180)

cb = new computerBase(900,random(450,height-300),180,150)
comp = new player(885,cb.body.position.y-153,50,180)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
pb.display()
cb.display()

   //display Player and computerplayer
   play.display()
   comp.display()


}
