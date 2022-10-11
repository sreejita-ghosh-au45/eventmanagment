const mongoose=require("mongoose")

const { request } = require("express")
const { restart } = require("nodemon")

//getting file in server
const path=require("path")

const getgallerypage=(req,res) =>{
    let galleryhtml = path.join(__dirname, "../../");
    // console.log(signuphtml)
     res.sendFile(`${galleryhtml}publics/gallery.html`);

//     res.sendFile("C:\Users\User\Desktop\event managment (2)\event managment\publics\home.html")
}
    
module.exports={getgallerypage}