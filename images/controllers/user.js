const { request } = require("express")
const { restart } = require("nodemon")
const ContactusModel=require("../models/user")
//getting file in server
const path=require("path")
const getContactus=(req,res) =>{
    res.sendFile("C:/Users/User/Desktop/event managment/publics/contactus.html")
}
const getHome=(req,res) =>{
    let signuphtml = path.join(__dirname, "../../");
    // console.log(signuphtml)
     res.sendFile(`${signuphtml}publics/home.html`);

//     res.sendFile("C:\Users\User\Desktop\event managment (2)\event managment\publics\home.html")
}
    




module.exports=getHome






const postContactModel = async(req,res)=>{
    Data = req.body
    console.log(Data)
    try{
       const details=await ContactusModel.create(Data)
        res.send({status:"success",details})
    }
    catch(err){
        console.log("error")
        res.send({status:"error in sendin diet to db"})
    }
}
module.exports={postContactModel,getContactus,getHome}




// login signup

