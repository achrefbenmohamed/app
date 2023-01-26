const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema(
    {
        title : String,
        description : String,
        posterURL : String,
        rating : Number,
        trailer : String,
    }
)

module.exports = mongoose.model('dbmovie',movieSchema)


