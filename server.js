const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

var arrayPlayersObject = [];

var playerProt = function (x, y, id){
       this.x = x,
       this.y = y,
       this.id = id
};

app.use('/', (req, res) => {

       res.render('index.html');

});

io.on('connection', (socket)=>{ //TODA VEZ QUE UM NOVO CLIENTE CONECTAR
       //arrayPlayersObject.push(new player(400, 400, socket.id));

       var newSocket = new playerProt(Math.random()*500, Math.random()*500, socket.id);

       socket.broadcast.emit('newSocket', newSocket);

       arrayPlayersObject.push(newSocket);

       socket.emit('mensagem', arrayPlayersObject);

       console.log(arrayPlayersObject);

       socket.on('disconnect', function(){

              console.log("Desconectou: " + socket.id);

              socket.broadcast.emit('disconectPlayer', socket.id);

              for(var i = 0; i < arrayPlayersObject.length; i++){

                     if(arrayPlayersObject[i]['id'] == socket.id){

                            arrayPlayersObject.splice(i, 1);

                     }

              }

       });

       socket.on('update', (playerX, playerY)=> {

              for(var i = 0; i < arrayPlayersObject.length; i++){

                     if(arrayPlayersObject[i]['id'] == socket.id){

                            arrayPlayersObject[i]['x'] = playerX;

                            arrayPlayersObject[i]['y'] = playerY;

                     }

                     socket.broadcast.emit('updatePositions', socket.id, playerX, playerY);

              }

       });

});


server.listen(3000);