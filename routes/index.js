/* -- request information -- */

const express = require("express"); 
const router = express.Router(); 

// exports from the api and homeroutes js file
const homeRoutes = require("./homeroutes.js");
const apiRoutes = require("./api.js"); 
 

/* -- Use -- */
router.use("/", homeRoutes); 
router.use("/api", apiRoutes)



/* -- ecporting -- */
module.exports = router; 
