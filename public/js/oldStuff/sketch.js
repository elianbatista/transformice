let Engine;
let World;
let Bodies;

let engine;
var players = [];
var paredes = [];
var platarformas;

//Tempo de execução
let deltaOld = 0;
let deltaNew = 0.1;
function setup() {
  createCanvas(800, 800);
  rectMode(CENTER)
  Engine = Matter.Engine;
  World = Matter.World;
  Bodies = Matter.Bodies;
  
  engine = Engine.create();
  paredes.push(new parede(10,height/2,20,height,0)); // esquerda
  paredes.push(new parede(width-10,height/2,20,height,0)); // direita

  paredes.push(new parede(width/2,10,width, 20, 0)); // cima
  paredes.push(new parede(width/2,height-10,width, 20, 0));//baixo

  
  players.push(new player(width/2, height/2));

}
function keyIsPressed(){
  
}
function drawPlayers(){
  for(let p of players){
    p.display();
    p.update();

  }
}
function drawParedes(){
  for(let p of paredes){
    p.display();

  }
}

function draw() {
  Matter.Engine.update(engine);
  background(51);
  deltaOld = deltaNew;
  
  
  drawPlayers();
  drawParedes();
 
  
  /*
  if (keyIsDown(LEFT_ARROW)) {
    Matter.Body.applyForce(boxes.b, boxes.b.position,  {x: -0.001, y: 0})
  } else if (keyIsDown(RIGHT_ARROW)) {
    Matter.Body.applyForce(boxes.b, boxes.b.position,  {x: +0.001, y: 0})
  }
  var collision = Matter.SAT.collides(boxes.b, chao.b);
  var colWall = Matter.SAT.collides(boxes.b, parede.b);
  
   if (keyIsDown(UP_ARROW)) {
     if (collision.collided) {
    Matter.Body.applyForce(boxes.b, boxes.b.position,  {x: 0, y: -0.03})
    }
}
 // if(boxes.b.
  
 // console.log(boxes.b);
  
  
  boxes.display();
  parede.display();
  chao.display();
 // noLoop();
 */
deltaNew = millis();
}