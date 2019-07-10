//p5.disableFriendlyErrors = true;

var Engine;
var World;
var Bodies;
var teste;

var players = [];

var limites;
function setup(){
    createCanvas(800, 800);
    //frameRate(2);
    rectMode(CENTER)
    Engine = Matter.Engine;
    World = Matter.World;
    Bodies = Matter.Bodies;
    
    engine = Engine.create();

    socket.on('mensagem', function(mensagem){

        createPLayers(mensagem);
      
    });

    limites = new limite(0,0,width,height,10);
    
}
function createPLayers(protPlayer){
    for(let p of protPlayer){
        if(p.id == socket.id){
            players.push(new player(p.x,p.y,p.id,false));
        }else{
            players.push(new player(p.x,p.y,p.id,true));
        }
    }
}
function drawPlayers(){
    if(players.length>0){
        for(let p of players){

            p.display(socket.id);
            p.update();
    
        }
    }
}

function draw(){
    Matter.Engine.update(engine);
    background(51);
    console.log(frameRate());
    //console.log(players);
    //console.log(socket.id)
    //console.log("A");
    
    drawPlayers();
    limites.display()
   // fill(255);
    //circle(400,400,16);
    
  //  drawParedes();
 
}