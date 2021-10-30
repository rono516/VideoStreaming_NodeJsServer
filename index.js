const express = require("express");
const fs = require("fs");  
const app = express();

 app.get("/", function(req, res){
     res.sendFile(__dirname+ "/index.html");
 });
 app.get("/video", function(req, res){
     const range = req.headers.range;

     if(!range){
         res.status(400).send("Requires Range header");
     }
 });

 app.listen(8000, function(){
     console.log("listening to port 8000");
 });