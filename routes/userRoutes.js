const express = require('express');
const router=express.Router()

const userControler=require('../controlers/userLoginControler')

router.post('/register', userControler.registerUser)
router.post('/login', userControler.loginUser)


module.exports=router