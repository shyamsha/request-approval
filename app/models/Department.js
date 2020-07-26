const mongoose=require('mongoose')
const validator=require('validator')
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
const Schema=mongoose.Schema

const departmentSchema=new Schema({
    deptName:{
        type:String,
        required:true     
    }
})

const Department = mongoose.model('Department', departmentSchema);
module.exports={
    Department
}