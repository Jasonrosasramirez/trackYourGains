/* -- Creating basic variable  -- */
const express = require("express"); 
const router = express.Router(); 
const mongojs = require("mongojs")
const mongoose = require("mongoose"); 

const Workout = require("../models/workout.js");


/* -- the magic -- */

// create the new work template 
router.post("/workouts", (req, res) => {
    Workout.create({})
    .then(workoutDB => {
        res.json(workoutDB);    
    })
    .catch(err => {
        res.json(err);
    });  
    
    // const new_Workout = new Workout(body); // populating the new body template  
    // new_Workout.totalTime(); 

    // Workout.create(new_Workout).then(workoutDB => {
    //         res.json(workoutDB); 
    // })
    // .catch(err => {
    //     res.status(400).json(err);
    // });
});

// add a new exercise to the workout
router.put("/workouts/:id", (req, res) => {
    Workout.updateOne({
        _id: mongojs.ObjectId(req.params.id)
    }, {
            $push: {
                exercises: req.body, 
            }
    }).then(workoutDB => {
        res.json(workoutDB); 
    }).catch(err => {
        res.status(400).json(err); // reports the errors as a json format
    });
}); 

// retreive all workouts 
router.get("/workouts", (req, res) => {
    Workout.find({}).sort({ day: 1 })
    .then(workoutDB => { // a promise is used here 
        res.json(workoutDB);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// The workout graphs 
router.get("workouts/range", async (req, res) => {
    Workout.aggregate([/* enter the array of objects here */])
    .then(workoutDB => {
        res.json(workoutDB);
    })
    .catch(err => {
        res.status(400).json(err);
    });
}); 


/* -- exporting -- */
module.exports = router; 