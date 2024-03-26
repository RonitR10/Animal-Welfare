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

//mysql connection
// const con=mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Pratham@1617",
//   database: "ngo"
// })
 
//user login page
app.get("/loginreq",(req,res)=>{
    res.render("loginreq.ejs");
})

//authentication and user page
app.post("/Logsubmit",(req,res)=>{
  res.render("userprofile.ejs");
})

//NGO display
app.get("/ngodetails",(req,res)=>{ // convert get into post later
    // let pincode=req.body;
    // let ngoarray=[];
    // for(let i=0;i<=3;i++){
    //     pincode=pincode.slice(-i);
    //     con.query(`SELECT * FROM ngo where pincode like ${pincode}%`, function (err, result, fields) {
    //         if (err) throw err;
    //         ngoarray.push(result);
    //       });
    //  }
    //  let ngolist= new Set(ngoarray);
    // send array(ngolist) to template below later
    res.render("ngo.ejs");
})
