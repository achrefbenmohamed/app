const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name : String,
        age : Number,
        email : {type : String,unique : true,required : true},
        password : {type : String, required : true},
        pic : String,
        role : String
    }
)

module.exports = mongoose.model('Movies',userSchema)