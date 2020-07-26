const express=require('express')
const router=express.Router()
const {Department}=require('../models/Department')
const { authenticateUser}=require('../middleware/authentication')


router.post('/create',(req,res)=>{
    const body=req.body
   
    const department =new Department(body)
    console.log(body)
    department.save()
    .then(department=>res.send(department))
    .catch(err=>res.send(err))
})


router.get('/allDepartments',authenticateUser,async function(req,res){
    
    
    let allDepartments =await Department.find()
    return res.send(allDepartments)

})

module.exports={
    departmentsRouter:router
}
