const mongoose = require("mongoose");

//schema for Payment -----

const paymentSchema = new mongoose.Schema({
   card_number : {
    type: Number,
    required : true
   },
    expiry_date : {
    type: String,
    required: true
},
   CVV_Number: {
    type: String,
    required: true
},
    Card_Holder_Name : {
    type : String,
    required: true
},

})

const PaymentModel=mongoose.model("payment", paymentSchema)
module.exports=PaymentModel