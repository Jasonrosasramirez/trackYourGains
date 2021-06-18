// will be using mongoose

const mongose = require("mongoose"); 
const Schema = mongoose.Schema; 

const workoutSchema = new Schema(
    {}
)

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout; 
