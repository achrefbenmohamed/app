const User = require("../Models/User")
const bcrypt = require('bcrypt')
var jwt = require ('jsonwebtoken')
exports.SignUp = async(req,res)=>{
    try {
        const {name,email,password} = req.body


        const found = await User.findOne({email}) 


        if(found){
            return res.status(400).send({errors : [{Msg : 'Email already exists'}]})
        }

        const newUser = new User({...req.body,pic : 'https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg', role:'client'})

        const salt = 10 

        const hashedPassword = bcrypt.hashSync(password, salt);

        newUser.password = hashedPassword
        await newUser.save()
        const payload = { id: newUser._id}
        var token = jwt.sign(payload, process.env.privateKey);

        res.status(200).send({Msg : 'User Registred',newUser,token})
    } catch (error) {
        res.status(500).send({errors : [{Msg : 'Could not register'}]})
        
    }
    }
    exports.SignIn = async(req,res)=>{
        try {
           const {email,password} = req.body
    
           const found = await User.findOne({email})
    
        if(!found){
                return res.status(400).send({errors : [{Msg : 'Email not exists'}]})
            }
    
           const decoded = bcrypt.compareSync(password, found.password)
    
           if (!decoded) {
                return res.status(400).send({errors : [{Msg : 'Password Invalid'}]})
            
           }
    
           const payload = { id: found._id}
           var token = jwt.sign(payload, process.env.privateKey)
    
           res.status(200).send({Msg : "Logged in", found,token})
    
        } catch (error) {
            res.status(500).send({errors : [{Msg : 'Could not logged in'}]})
        }
    }

    exports.readUsers=async(req,res)=>{
        try {
            const users = await User.find()
            res.status(200).send({Msg : "List of users",users})
        } catch (error) {
            res.status(500).send('Could not find users')
        }
    }
    
    exports.deleteUser=async(req,res)=>{
        try {
            const {id} = req.params
    
            await User.findByIdAndDelete(id)
            res.status(200).send({Msg : 'User deleted'})
        } catch (error) {
            res.status(500).send('Could not delete user')
        }
    }
    
    exports.updateUser=async(req,res)=>{
        try {
            const {id} = req.params
            await User.findByIdAndUpdate(id,{$set : req.body})
            res.status(200).send({Msg : "User updated"})
        } catch (error) {
            res.status(500).send('Could not update user')
        }
    }
    
    exports.readUser=async(req,res)=>{
        try {
            const {id} = req.params
            const found = await User.findById(id)
            res.status(200).send({Msg : 'User founded',found})
        } catch (error) {
            res.status(500).send('Could not find user')
        }
    }