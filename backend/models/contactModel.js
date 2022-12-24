const mongoose=require("mongoose");
const validator=require("validator");
const contactMessageSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email id")
            }
        }
    },
    subject:
    {
       type:String,
       required:true, 
    },
    message:{
        type:String,
        required:true,

    }
})
//collection

module.exports=mongoose.model("ContactUser",contactMessageSchema);