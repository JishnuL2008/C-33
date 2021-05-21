const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg,bgImg;
var snowman,snowmanImg;
var sound;
var snow1,snow2,snow3,snow4,snow5;

function preload(){
  bgImg=loadImage("snow1.jpg");
sound=loadSound("sound2.wav");
  snowmanImg=loadImage("img2.jpg");
}



function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  sound.play();
  snowman=createSprite(250, 320, 50, 50);
  snowman.addImage(snowmanImg);
snowman.scale=0.40;

snow1=new Snow(300,200,20,20);
snow2=new Snow(600,200,20,20);
snow3=new Snow(300,400,20,20);
snow4=new Snow(100,200,20,20);
snow5=new Snow(200,400,20,20);


}

function draw() {
  background(bgImg);  
  Engine.update(engine);





  drawSprites();

snow1.display();
snow2.display();
snow3.display();
snow4.display();
snow5.display();



}