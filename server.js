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

       arrayPlayersObject.push(new playerProt(Math.random()*500, Math.random()*500, socket.id));

       console.log(socket.id);

       socket.emit('mensagem', arrayPlayersObject);

});
setInterval(heartbeat, 33);

function heartbeat() {
  io.sockets.emit('heartbeat', blobs);
}
io.on('disconnect', function() {
       console.log("Client has disconnected");
});

server.listen(3000);