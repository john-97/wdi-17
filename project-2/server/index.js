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

// init Cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//==============================
//          Routes
//==============================
const db = require('./db');
const routes = require('./routes');

routes(app, db);


const server = app.listen(1111, () => {console.log('listening on port 1111')});

let onClose = function(){
    console.log("closing");
    server.close(() => {
        console.log('Process terminated');
        db.pool.end( () => console.log('Shut down db connection pool'));
    })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);