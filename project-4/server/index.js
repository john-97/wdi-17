const express = require('express');

// init Express App
const app = express();
const methodOverride = require('method-override');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(methodOverride('_method'));

//allow for 2 servers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//==============================
//          Routes
//==============================
const db = require('./db');
const routes = require('./routes');

routes(app, db);

//==============================
//          SOCKETS
//==============================
// const server = app.listen(1111, ()=>{console.log("~~~ Listening on PORT 1111 ~~~")})
const server = require('http').createServer(app);
const io = require('socket.io')(server)
io.on('connection', function(socket){
  console.log('someone connected');
  // RECEIVING MESSAGES IN REAL TIME
  socket.on('roomMessage', (data)=>{
    console.log(data)
    db.chats.addMessage(data, (err, message)=>{
      if(err || message===undefined){
        console.log(err, "message may be undefined")
      }else{
        console.log(message.rows)
        socket.broadcast.emit(`${data.name}`, data)
      }
    })
  });
});


server.listen(1111, ()=>{console.log("~~~ Listening on PORT 1111 ~~~")});


let onClose = function(){
    console.log("closing");
    server.close(() => {
        console.log('Process terminated');
        db.pool.end( () => console.log('Shut down db connection pool'));
    })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);