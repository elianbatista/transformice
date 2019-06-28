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

app.use('/', (req, res) => {

       res.render('index.html');

});

io.on('connection', (socket)=>{ //TODA VEZ QUE UM NOVO CLIENTE CONECTAR

       arrayPlayersObject.push(new player(400, 400, socket.id));

       console.log(socket.id)

});

server.listen(3000);