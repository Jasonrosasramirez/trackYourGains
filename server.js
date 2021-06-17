// Basic Imports 
const express = require("express");
const mangojs = require("mangojs");
const app = express(); 

require("dotenv").config();


const logger; // = require("morgan in the example"); 

// app.use 
app.use(logger("dev")); 
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(express.static("public"));

/* -- User Routes -- */


//

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  



/* -- Listing on Port 3000 -- */
app.listen(3000, () => {
    console.log("App running on port 3000");
});