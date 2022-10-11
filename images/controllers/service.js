const mongoose=require("mongoose")

const { request } = require("express")
const { restart } = require("nodemon")

//getting file in server
const path=require("path")

const getservicepage=(req,res) =>{
    let servicehtml = path.join(__dirname, "../../");
    // console.log(signuphtml)
     res.sendFile(`${servicehtml}publics/service.html`);

//     res.sendFile("C:\Users\User\Desktop\event managment (2)\event managment\publics\home.html")
}
    
module.exports={getservicepage}

