const express = require("express");
const bcrypt = require("bcrypt")
const signupModel = require("../models/signup");
const path = require("path");
const { restart } = require("nodemon");
let pat = path.join(__dirname,"../../");

const getsignupuser=(req,res)=>{
    res.sendFile(`${pat}publics/signup.html`);
};


const postSignup = async(req,res)=>{
    const data=req.body;
    console.log(req.body);
    hashpass= await bcrypt.hash(data.password,5)
    data.password=hashpass
    try{
        const user = await signupModel.create(data) 
        // res.status(200).sendFile(`${pat}publics/login.html`);
        res.redirect("http://localhost:8000/login")
    }catch(error){
        console.log(error);
        res.status(500).send({MSG:"internal error",error});
    }
};

// const loginController = async(req,res) =>{
    

module.exports = {
    postSignup,
    getsignupuser,
};