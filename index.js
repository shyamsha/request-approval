const express=require('express')
// const app=express()
 const cors=require('cors')

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);



const port=3005
const {mongoose}=require('./config/database')
const {routes}=require('./config/routes')
var io = require('socket.io')(http);
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.json())
app.use(cors())
app.use('/',routes)


// app.listen(port,()=>{
//     console.log('lisiting to port',port)
// })


io.on('connection', (socket) => {
    console.log('a user connected');
  });
  
  http.listen(port, () => {
    console.log('listening on port',port);
  });