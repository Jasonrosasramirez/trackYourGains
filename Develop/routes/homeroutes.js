/* -- variables -- */
const express = require("express");
const router = express.Router(); 
const path = require("path");

// calling the workout module 
const Workout = require("../models/workout.js"); 


/* -- Loading -- */


/* When the user loads the page, they should be given the option to create a new workout or continue with their last workout.

The user should be able to:
  * Add exercises to the most recent workout plan.
  * Add new exercises to a new workout plan.
  * View the combined weight of multiple exercises from the past seven workouts on the `stats` page.
  * View the total duration of each workout from the past seven workouts on the `stats` page. 
*/


// Loads the homepage 
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// loads the exercise html file 
router.get("exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});


