// will be using mongoose

const mongose = require("mongoose"); 
const Schema = mongoose.Schema; 

const workoutSchema = new Schema({
    // a collection of objects recording the workouts. As stated in the readme  

    /*
    I want to be able to log multiple exercises in a workout on a given day. 
    I should also be able to track the name, type, weight, sets, reps, and duration of exercise. 
    If the exercise is a cardio exercise, I should be able to track my distance traveled.
    */

    // the required template below. 
    day: {}, 
    totalDuration: {},    
    exercise: {}

});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout; // exports the module 
