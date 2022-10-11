const jwt=require("jsonwebtoken")
const bcrypt = require("bcrypt")
const signupModel=require("../models/signup")
const path = require("path")
const { builtinModules } = require("module")
// const { restart } = require("nodemon")
const pat = path.join(__dirname,"../../")
console.log(pat)
const getLoginPage= (req,res) =>{
    res.sendFile(`${pat}publics/login.html`)
}

const postLoginPage = async (req, res) => {
  const {email,password} = req.body
  try{
  const user = await signupModel.findOne({email})
  console.log(user,"found user by email")
  if(!user){
    //   res.redirect("http://localhost:8000/error")
    res.status(500).send({status:"invalid email/password"})
  }
  const match =await bcrypt.compare(password,user.password)
  console.log("this is match",match)
  if(!match){
      console.log("password not matched")
    //   res.redirect("http://localhost:8000/error")
    res.status(500).send({status:"password doesnt match"})
  }
  console.log("user found in db")
//   const id = user._id
//   const username = user.username
  console.log("just before payload")
  const userPayLoad = {email}
  const accessToken = jwt.sign(userPayLoad,process.env.AUTH_SECRET_KEY,{algorithm:"HS384",expiresIn:"1d"})
  console.log(accessToken,"this is accesstoken")
  res.cookie("jwt",accessToken,{maxAge:900000000})
  //res.redirect("http://localhost:8000/allBlogs")
//   res.redirect("http://localhost:8000/profile")
res.status(200).send({status:"succesfull"})
  }
  catch(err){
      console.log("in catch block of postlogin user not found ")
      res.send({status:"error"})
  }
}
module.exports={getLoginPage,postLoginPage}

