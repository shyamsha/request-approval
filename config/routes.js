const express=require('express')
const router=express.Router()
const {usersRouter}=require('../app/controllers/UserController')
const {requestformRouter}=require('../app/controllers/RequestFormController')
const {departmentsRouter}=require('../app/controllers/DepartmentController')
router.use('/users',usersRouter)
router.use('/requestform',requestformRouter)
router.use('/department',departmentsRouter)


module.exports={
    routes:router
}