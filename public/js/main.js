p5.disableFriendlyErrors = true;
let Engine;
let World;
let Bodies;
function setup(){
    createCanvas(800, 800);
    rectMode(CENTER)
    Engine = Matter.Engine;
    World = Matter.World;
    Bodies = Matter.Bodies;
    
    engine = Engine.create();
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
function draw(){
    Matter.Engine.update(engine);
    background(51);
    
    
    
    drawPlayers();
    drawParedes();
 
}