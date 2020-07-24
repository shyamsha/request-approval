const mongoose=require('mongoose')
const config=require('config')
const db=config.get('mongoURI')
mongoose.Promise=global.Promise

mongoose.connect(db,{useNewUrlParser: true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false})
    .then(function(){
        console.log('connected to db')
    })
    .catch(function(){
        console.log('error connecting to db',err)
    })

module.exports={

    mongoose
}