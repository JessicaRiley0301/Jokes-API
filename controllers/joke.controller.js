// //CRUD

// const User = require('../models/user.model');

// //shell db.collection_name.create({query})
// //mongoose: model_name.create({query})

// //module.exports = {
//     //create
//     //createNewUser: (req,res) => {
//         //console.log(req.body)
//         //User.create(req.body)
//         //then(newlyCreatedUser => res.json({message: "success", user: newlyCreatedUser}))
//         //catch( err => res.json({ message: "something went wrong", error: err}))
//     // }
//     //readall
//     //readone
//     //update
//     //delete
// // }

// module.exports.findAllUsers = (req, res) => {
//     User.find()
//         .then(allDaUsers => res.json({ users: allDaUsers }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

// module.exports.findOneSingleUser = (req, res) => {
//     User.findOne({ _id: req.params.id })
//         .then(oneSingleUser => res.json({ user: oneSingleUser }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

// //can also use User.findbyID(req.params.id) //remember to set "id" as route parameter in routes


// module.exports.createNewUser = (req, res) => {
//     User.create(req.body)
//         .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

// module.exports.updateExistingUser = (req, res) => {
//     User.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(updatedUser => res.json({ user: updatedUser }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

// module.exports.deleteAnExistingUser = (req, res) => {
//     User.deleteOne({ _id: req.params.id })
//         .then(result => res.json({ result: result }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

// CRUD
const Joke = require('../models/joke.model');

// shell: db.collection_name.create({query})
// mongoose: model_name.create({query})

module.exports = {
    // Create
    createNewJoke: (req, res) => {
        console.log(req.body);
        Joke.create(req.body)
            // IMPORTANT what we return here is what we receive in React
            .then(newlyCreatedJoke => res.json({ message: "success", joke: newlyCreatedJoke }))
            .catch(err => res.json({ message: 'error', error: err }));
    },
    // Read all
    findAllJokes: (req, res) => {
        Joke.find()
            .then(allDaJokes => {
                console.log(allDaJokes);
                res.json({ allTheJokes: allDaJokes })
            })
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },
    // Read one
    findOneSingleJoke: (req, res) => {
        Joke.findById(req.params.id) // remember to set "id" as route parameter in routes
            .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },
    // Update
    updateExistingJoke: (req, res) => {
        // User.findOneAndUpdate({_id : req.params.id}, req.body)
        Joke.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedJoke => res.json({ joke: updatedJoke }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },
    // Delete
    deleteAnExistingJoke: (req, res) => {
        // User.deleteOne({_id: req.params.id})
        Joke.findByIdAndDelete(req.params.id)
            .then(result => res.json({ deletedObj: result }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }
}
