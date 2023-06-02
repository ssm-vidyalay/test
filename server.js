const express = require("express");
const app=express();

app.get("/", (req, res)=>{
    res.send("Helllo");
})


app.listen(5000, ()=>{
    console.log("Listening on Port 5000");
})