
const express = require('express')
const { SignUp, SignIn, readUsers, readUser, deleteUser, updateUser } = require('../Controllers/User');
const isAuth = require('../Middelwares/isAuth');
const { validationSignUp, Validation, validationSignIn } = require('../Middelwares/Validator');

const userRouter = express.Router()

userRouter.post('/SignUp',validationSignUp,Validation,SignUp)

userRouter.post('/SignIn',validationSignIn,Validation,SignIn)

userRouter.get('/currentUser',isAuth,(req,res)=>{ res.send(req.user)})

userRouter.get('/readUsers',readUsers)

userRouter.delete('/deleteUser/:id',deleteUser)

userRouter.put('/updataUser/:id',updateUser)

userRouter.get('/readUser/:id',readUser)  

module.exports = userRouter