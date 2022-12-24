const ErrorHander = require("../utils/errorhander");
const AsyncError = require("./AsyncError");
const JWT=require("jsonwebtoken");
const User=require("../models/userModel");
const dotenv=require("dotenv");
dotenv.config({path:"backend/config/config.env"});
exports.isAuthenticatedUser=AsyncError(async(req,res,next)=>{
    const {token}=req.cookies;
   if(!token){
    return next(new ErrorHander("Please Login First",401));
   }
  const decodedData=JWT.verify(token,process.env.JWT_SECRET);
  req.user=await User.findById(decodedData.id);
  next();
});

//Admin

exports.authorizeRoles=(...roles)=>{
  return (req,res,next)=>{
    if(!roles.includes(req.user.role)){
    return next(
      new ErrorHander(
        `Role:${req.user.role} is not allowed to access`,403
      )
    ) ;
    };
    next();
  };
};