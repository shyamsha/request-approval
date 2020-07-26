
 
 const cors=require('cors')


 const socket = require("socket.io")
var http = require('http')
const express=require('express')


const app=express()
const server= http.createServer(app)

const io = socket(server);




const port=3005
const {mongoose}=require('./config/database')
const {routes}=require('./config/routes')


app.use(express.json())
app.use(cors())
app.use('/',routes)


// app.listen(port,()=>{
//     console.log('lisiting to port',port)
// })


// io.on('connection', (socket) => {
//     console.log('a user connected');
//   });


io.on("connection", socket => {
    socket.emit("your id", socket.id);
    socket.on("send message", body => {
        io.emit("message", body)
    })
})
  
  server.listen(port, () => {
    console.log('listening on port',port);
  });