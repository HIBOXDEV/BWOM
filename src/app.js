const express = require("express");
const ejs = require("ejs");
const app = express()
const path = require("path");





// Setting
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));

app.use(express.static(path.join(__dirname , "public")));




// ALL ROUTES
app.use("/" , require("./routes/index.routes"));

 
// functions
  
 module.exports = app
