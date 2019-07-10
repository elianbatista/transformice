//p5.disableFriendlyErrors = true;

var Engine;
var World;
var Bodies;
var teste;

var players = [];
var playerPrincipal;
var limites;

function setup(){
    createCanvas(800, 800);

    rectMode(CENTER)
    Engine = Matter.Engine;
    World = Matter.World;
    Bodies = Matter.Bodies;
    engine = Engine.create();

    socket.on('mensagem', function(mensagem){
        createPlayers(mensagem);
    });

    limites = new limite(0,0,width,height,10);
}
function createPlayers(protPlayer){
    for(let p of protPlayer){
        if(p.id == socket.id){
            playerPrincipal = new player(p.x,p.y,p.id);
            
        }else{
            
            players.push(new protoPlayer(p.x,p.y,p.id));
        }
    }
}
function drawPlayers(){
    if(playerPrincipal ){
        playerPrincipal.display();
        playerPrincipal.update();
    }
    if(players.length>0){
        for(let p of players){
            p.display();
        }
    }

}

function draw(){
    Matter.Engine.update(engine);
    background(51);
   
 
    drawPlayers();
    limites.display()

}