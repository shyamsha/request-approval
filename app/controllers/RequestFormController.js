const express=require('express')
const router=express.Router()
const {User}=require('../models/User')
const {RequestForm}=require('../models/RequestForm')

const { authenticateUser}=require('../middleware/authentication')

const _=require('lodash')

router.post('/create', authenticateUser,async(req,res)=>{
    const body=req.body
    const requestform=new RequestForm(body)
      // logic to check a user can't assign to a user of same department

      let foundUser=await User.findById(body.assignedUser)
      if(req.user.department!==foundUser.department){
      requestform.save()
      .then(requestform=>res.send(requestform))
      .catch(err=>res.send(err))
      }else{
          res.send({'error':'cannot request a user of the same department'})
      }
   
//    console.log('in bodyof create')
})
router.get('/view',authenticateUser,(req,res)=>{
        // console.log(req.user,'in view')
    const user=req.user
    RequestForm.find().populate('assignedUser','username').populate('assignedDepartment','department')
    .then(requestform=>{
        let filteredForm=[]
        for (let i=0;i<requestform.length;i++){
            if(requestform[i].createdBy.toString()==user._id.toString() || user._id.toString()===requestform[i].assignedUser._id.toString() || ((requestform[i].assignedDepartment.department===user.department) && (requestform[i].status!=='approved')) ){
                filteredForm.push(requestform[i])
                 
        }
    }
        //  console.log(filteredForm,'fffff')

        res.send(filteredForm)
    })
    .catch(err=>{
        res.send(err)
    });

})
router.put('/edit/:id',authenticateUser,async (req,res)=>{
    const id=req.params.id
    const loggedinUser=req.user._id
    console.log(loggedinUser)
    console.log(id,'in id')
    let form=await RequestForm.findById(id)
    if(!form){
        //error
        return res.send({error:'form doesnt exist'})

    }
    else{
        if(loggedinUser.toString()!== form.assignedUser.toString()){
            return res.send({error:'logged in user & assigned user must be samemo'})
        }else if (form.status!=='pending'){
            return res.send({error:'form must be in pending state to approve'})
        }
        else{
            const body=req.body
            RequestForm.findByIdAndUpdate({_id:id},body,{new:true,runValidators:true})
            .then(requestform=>{
                res.send(requestform)


            })
            .catch(err=>{
                res.send(err)
            })
        }
    }
            
})
module.exports={
    requestformRouter:router
}
