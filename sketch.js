const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;

var diversion=[];
var plinko=[];
var particles=[];

var diversionHeight=300;

function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(480,650);

  //ground object
  ground=new Ground(240,650,480,10);

  //diversion objects
for(var i=0;i<=width;i=i+80){
diversion.push(new Division(i,height-diversionHeight/2,10,diversionHeight));
}

 //plinko objects
 for(var i=40;i<=width;i=i+50){
  plinko.push(new Plinko(i,75));
  }

  for(var i=10;i<=width;i=i+50){
    plinko.push(new Plinko(i,125));
    }

  for(var i=40;i<=width;i=i+50){
    plinko.push(new Plinko(i,175));
    }

  for(var i=10;i<=width;i=i+50){
    plinko.push(new Plinko(i,235));
    }

  for(var i=40;i<=width;i=i+50){
    plinko.push(new Plinko(i,285));
    }

  }

function draw() {
  Engine.update(engine);
 background(0);  

 //particle for every 60 frames
 if(frameCount%60===0){
  particles.push(new Particles(random(100,300),2));
}

 ground.display();

 for(var i=0;i<diversion.length;i=i+1){
 diversion[i].display();
}

for(var i=0;i<plinko.length;i=i+1){
  plinko[i].display();
 }

 for(var i=0;i<particles.length;i=i+1){
  particles[i].display();
 }

}