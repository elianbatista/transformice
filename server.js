const app = require('express')();
const http = require('http').createServer(app);

const io = require('socket.io')(http);
//ALOU ALOU
http.listen(3000, function(){

       console.log('Listening on port 3000');

});