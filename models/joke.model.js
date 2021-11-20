// 3. create mongoose schema and model

// a. the schema itself  -- the rules that the entries in the db must follow
//import mongoose here as well as config
const mongoose = require('mongoose');

//mongodb has no built in validators
//mongoose is doing all the validations and talking to mongo db

//a. the schema -- the rules that the entries in the db must follow
const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String
}, { timestamps: true});

//timestamps gives created at and updated at
//b. the model-- this is what we use to make queries to hte db
const Joke = mongoose.model('Joke', JokeSchema);

// c. exports this object
module.exports = Joke;



// b. the model -- this is what we use to make the actual querie to the db
