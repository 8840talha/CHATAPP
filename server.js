const express = require('express');
const app = express();
var users = [];
// var db=require('./db');
const http = require('http');
const server = http.createServer(app);
const socket = require('socket.io');
const io = socket(server);
app.use('/', express.static('public'));
// MAKING THE SOCKET CONNECTION
io.on('connection', function(socket){
    console.log(socket.id);
    // LISTENING TO THE CLIENT ON SERVER AND EMITTING THE MESSAGE TO ALL CONNECTED CLIENTS
    socket.on('messag', (data)=>{
        io.emit('al',{msg:data.msg,name:data.name})
            //  db.InsertintatoDb(data.name,data.msg,function(){
            //      res.sendStatus(200);
            //  })
                       
        })
    // SIMPLE DISCONNECT FUNCTION THAT WHICH SOCKET IS DISCONNECTED
        socket.on('disconnect', (data)=>{
            console.log("User disconnected is " + socket.id);
            
        })
        
})

server.listen(5001, ()=>{
    console.log('Server running')
    // db.connection.connect();
})