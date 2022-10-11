const { request } = require("express")
const { restart } = require("nodemon")

//getting file in server
const path=require("path")

const getaboutpage=(req,res) =>{
    let abouthtml = path.join(__dirname, "../../");
    // console.log(signuphtml)
     res.sendFile(`${abouthtml}publics/about.html`);

//     res.sendFile("C:\Users\User\Desktop\event managment (2)\event managment\publics\home.html")
}
    
module.exports={getaboutpage}