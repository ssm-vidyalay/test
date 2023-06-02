// const express = require("express");
// const app=express();

// app.get("/", (req, res)=>{
//     res.send("Helllo");
// })


// app.listen(5000, ()=>{
//     console.log("Listening on Port 5000");
// })


const app = require("./app");
const dotenv = require("dotenv");
// const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");

dotenv.config({path:"config/config.env"});


connectDatabase();

app.get("/", (req, res)=>{res.send("HelloWorld123")});

app.listen(4000, () => {
  console.log(`Server is working on http://localhost:${4000}`);
});
