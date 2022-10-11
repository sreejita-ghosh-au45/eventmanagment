const mongoose= require("mongoose")
const contactSchema= new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    
    email:{
        type:String,
        unique:true
    },
    number:{
        type:Number
    },
    subject:{
        type:String,
    },
    
    message:{
        type:String
    }
    })
    const contactusModel = mongoose.model("Constumer_details",contactSchema)
    module.exports = contactusModel

    