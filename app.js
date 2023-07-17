const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/billing")
.then(() => console.log("Connected to database"))
.catch(err => console.log(err));

const PORT = 3000;
app.listen(PORT, console.log("Server has started at port: " + PORT));