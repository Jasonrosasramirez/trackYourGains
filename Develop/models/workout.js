// will be using mongoose schema templating

const mongoose = require("mongoose"); 
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
        // well be referenced by the function below
        type: Number, 
        default: 0.0
    }

});

/* -- Running the totalTime -- */
workoutSchema.methods.totalTime = () => {
    for (let i = 0; i < this.exercise.length; i++){ // for this instance of the exercise object length 
        this.totalDuration += this.exercise[i].duration; // default is 0.0 will keep increasing. 
    }
    return this.totalDuration; 
}

/* -- Exporting -- */
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout; // referenced by the routes 
