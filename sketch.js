const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constarint=Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score=0;

function setup() {
  createCanvas(windowWidth/2,windowHeight);
  engine=Engine.create();
  world=engine.world;
  // ground
  ground=new Ground(320,580,windowWidth/2,20);
  // dividers
 for(var i=0; i<=width;i=i+80){
  divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
 }
 // plinkos/static ball
 for(var i=20; i<=width;i=i+50){
   plinkos.push(new Plinko(i,40));
 }

 for(var i=40; i<=width;i=i+50){
  plinkos.push(new Plinko(i,90));
}

for(var i=20; i<=width;i=i+50){
  plinkos.push(new Plinko(i,140));
}
for(var i=40; i<=width;i=i+50){
  plinkos.push(new Plinko(i,190));
}

for(var i=20; i<=width;i=i+50){
  plinkos.push(new Plinko(i,240));
}

// particles continously falling down
}

function draw() {
  background("skyblue"); 
  Engine.update(engine);
  // display ground.
  ground.display(); 
  // divider.
  for (var i = 0; i < divisions.length; i++) {
     
    divisions[i].display();
  }
  // plinkos/static balls
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  //particles continously falling down.
  if(frameCount%40===0){
    particles.push(new Particle(random(width/2-200, width/2+200), 12,12));
    score++;
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

  drawSprites();
}