//Basic module requirements
const express=require("express");
const app=express();
const mysql = require('mysql');
let port= 3000;
const path = require('path')
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')))
app.listen(port,(req,res)=>{
    console.log("Server start");
})
 
//user login page
app.get("/views/loginreq.ejs",(req,res)=>{
    res.render("loginreq.ejs");
})

//authentication and user page
app.post("/Logsubmit",(req,res)=>{
  res.render("userprofile.ejs");
})

//NGO display
app.get("/ngodetails",(req,res)=>{ // convert get into post later
    res.render("ngo.ejs");
})

