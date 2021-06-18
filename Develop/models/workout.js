// will be using mongoose schema templating

const mongose = require("mongoose"); 
const Schema = mongoose.Schema; 

// a collection of objects recording the workouts. As stated in the readme 
const workoutSchema = new Schema({

    // the required template below. 
    day: {
        type: Date,         // defining the object type  
        default: Date.now   // the standard value will result in the current date. 
    }, 
    
    exercise: {
        /* I should also be able to track the name, type, weight, sets, reps, and duration of exercise. 
        If the exercise is a cardio exercise, I should be able to track my distance traveled. */
        
        name: {
            type: String, 
            trim: true, 
            required: "What is the name of your exercise? "
        }, 

        type: {
            type: String, 
            trim: true, 
            required: "What kind of workout is this? "
        },

        weight: { type: Number}, 
        sets: { type: Number}, 
        reps: { type: Number}, 
        duration: { type: Number}, 
        distance: { Type: Number}
    },

    totalDuration: {
        type: Number, 
        default: 0.0
    }

});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout; // exports the module 
