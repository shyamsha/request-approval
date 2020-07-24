const express=require('express')
const app=express()
const cors=require('cors')
const port=3005
const {mongoose}=require('./config/database')
const {routes}=require('./config/routes')

app.use(express.json())
app.use(cors())
app.use('/',routes)


app.listen(port,()=>{
    console.log('lisiting to port',port)
})