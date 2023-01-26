const Movie = require("../Models/Movie")

exports.addMovie=async(req,res)=>{
    try {
        const found = await Movie.findOne({title : req.body.title})

        if(found){
            return res.status(400).send('Movie already exists')
        }
        const newMovie = new Movie(req.body)
        await newMovie.save()
        res.status(200).send({Msg : 'Movie added',newMovie})
    } catch (error) {
        res.status(500).send('Could not add movie')
    }
}

exports.readMovies=async(req,res)=>{
    try {
        const movies = await Movie.find()
        res.status(200).send({Msg : "List of movies",movies})
    } catch (error) {
        res.status(500).send('Could not find movies')
    }
}

exports.deleteMovie=async(req,res)=>{
    try {
        const {id} = req.params

        await Movie.findByIdAndDelete(id)
        res.status(200).send({Msg : 'Movie deleted'})
    } catch (error) {
        res.status(500).send('Could not delete movie')
    }
}

exports.updateMovie=async(req,res)=>{
    try {
        const {id} = req.params
        await Movie.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({Msg : "Movie updated"})
    } catch (error) {
        res.status(500).send('Could not update movie')
    }
}

exports.readMovie=async(req,res)=>{
    try {
        const {id} = req.params
        const found = await Movie.findById(id)
        res.status(200).send({Msg : 'Movie founded',found})
    } catch (error) {
        res.status(500).send('Could not find Movie')
    }
}