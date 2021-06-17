// Basic Imports 
const express = require("express");
const mangojs = require("mangojs");
const app = express(); 

const logger; // = require("morgan in the example"); 

// app.use 
app.use(logger("dev")); 
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(express.static("public"));

// Creating the db 
const databaseURL; // ="warmup for example"
const collection; // = ["books for example"]

const db = mangojs(databaseURL, collection); 
db.on("error", error => {
    console.log("Database Error: ", error); 
}); 


/* -- User Routes -- */




/* -- Listing on Port 3000 -- */
app.listen(3000, () => {
    console.log("App running on port 3000");
});