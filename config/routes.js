const express=require('express')
const router=express.Router()
const {usersRouter}=require('../app/controllers/UserController')
const {requestformRouter}=require('../app/controllers/RequestFormController')

router.use('/users',usersRouter)
router.use('/requestform',requestformRouter)

module.exports={
    routes:router
}