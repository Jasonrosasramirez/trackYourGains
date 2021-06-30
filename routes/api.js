/* -- Creating basic variable  -- */
const express = require("express"); 
const router = express.Router(); 
const mongo = require("mongojs")
const mongoose = require("mongoose"); 

const Workout = require("../models/workout.js");


/* -- the magic -- */

// create the new work template 
router.post("/workouts", ({body}, res) => {
    const new_Workout = new Workout(body); // populating the new body template  
    new_Workout.totalTime(); 

    Workout.create(new_Workout).then(workoutDB => {
            res.json(workoutDB); 
    })
    .catch(err => {
        res.status(400).json(err);
    });




});










/* -- exporting -- */
module.exports = router; 