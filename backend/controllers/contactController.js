const ContactUser=require("../models/contactModel")
const ErrorHander=require("../utils/errorhander");
const AsyncError=require("../middleware/AsyncError");

exports.SendMessage= AsyncError(async(req,res,next)=>{
    const contactUser=await ContactUser.create(req.body);
    res.status(201).json({
        success:true,
        contactUser,
    });
}); 