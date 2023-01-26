const router = require("express").Router();
const MovieList = require("../models/List");
const verify  = require("../verifyToken");

// Create New Movie List
router.post("/", verify, async function(req, res){
    if(req.user.isAdmin){
        const newMovieList = new MovieList(req.body);
        try{
            const savedMovieList = await newMovieList.save();
            res.status(201).json(savedMovieList);
        } catch(err){
            res.status(500).json(err);
        }
    } else{
        res.status(403).json("You are not allowed to create movies list...!!!")
    } 
});

// Delete all Movies List
router.delete("/:id", verify, async function(req, res){
    if(req.user.isAdmin){
        try{
            await MovieList.findByIdAndDelete(req.params.id);
            res.status(201).json("The movie lists has been deleted...!!!");
        } catch(err){
            res.status(500).json(err);
        }
    } else{
        res.status(403).json("You are not allowed to delete the movies list...!!!")
    } 
});

// Get all Movies List
router.get("/", verify, async function(req, res){
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];

    try{
        if(typeQuery){
            if(genreQuery){
                list = await MovieList.aggregate([
                    { $sample: { size:10 }},
                    { $match: { type: typeQuery, genre: genreQuery }},
                ]);
            } else{
                list = await MovieList.aggregate([
                    { $sample: { size:10 }},
                    { $match: { type: typeQuery }},
                ]);
            }
        } else{
            list = await MovieList.aggregate([{ $sample: { size:10 }}]);
        }
        res.status(200).json(list);
    } catch(err){
        res.status(500).json(err);
    }
});
module.exports = router