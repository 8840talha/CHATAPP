// MAKING THE SOCKET CONNECTION
var socket = io();
// var db=require('./db');
var result = document.getElementById('messages');
// ACCESSINT THE ELEMENTS BY THERE IDS
function send(){
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    // EMITTING AN EVENT ON MESSAG FROM CLIENT WITH MEASSAGE AND NAME 
    socket.emit('messag', {msg: message,name: name})

   
}

// listening to server and appending the message coming from server to all connected clients
socket.on('al', (data)=>{
  

  let h4= document.createElement('h4');
  h4.innerHTML=data.name;
  let p= document.createElement('p');
  p.innerHTML=data.msg;
 result.appendChild(h4);
 result.appendChild(p);
  
})

