const ErrorHander = require("../utils/errorhander");
const AsyncError = require("../middleware/AsyncError");
const User=require("../models/userModel");
const sendToken = require("../utils/jwtToekn");
const sendEmail=require("../utils/sendEmail.js")
const crypto =require("crypto");
//Register a User

exports.registerUser=AsyncError(async(req,res,next)=>{
    const {name,email,password,phoneno,address}=req.body;
    const user=await User.create({
        name,
        email,
        password,
        phoneno,
        address,
        avatar:{
            public_id:"sample",
            url:"pp",
        },
    });
   sendToken(user,201,res);
});

//Login

exports.loginUser=AsyncError(async(req,res,next)=>{
    const {email,password}=req.body;
    if(!email|| !password){
        return next(new ErrorHander("Please Enter Email and Password",400));
    }
    const user=await User.findOne({email}).select("password");
    if(!user){
        return next(new ErrorHander("Invalid email or password",401));
    }
    const isPasswordMatched=user.comparePassword(password);
    if(!isPasswordMatched){
    return next(new ErrorHander("Invalid email or password",401));
    }
   sendToken(user,200,res);
});
//Logout 

exports.logout=AsyncError(async(req,res,next)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    });
     res.status(200).json({
        success:true,
        message:"Logged Out",
     });
});

//Forgot Password

exports.forgetPassword=AsyncError(async(req,res,next)=>{
    const user=await User.findOne({email:req.body.email});

    if(!user){
        return next(new ErrorHander("User not found",404));
    }
    //get password token
    const resetToken = user.getResetPasswordToken();

    await user.save({validateBeforeSave:false});
    /* `http://localhost/dilfoods/password/reset/${resetToken}`*/
    const resetPasswordUrl=`${req.protocol}://${req.get("host")}/dilfoods/password/reset/${resetToken}`;
    const message=`Your password reset token is :-\n\n ${resetPasswordUrl}\n\nIf you have requested this email password Please ignore it`;

    try {
        await sendEmail({
       email:user.email,
       subject:`DilFoods Password Recovery`,
       message,
        });
        res.status(200).json({
            success:true,
            message:`Email sent to ${user.email} successsfully`,
        });
    } catch (error) {
        user.resetPasswordToken=undefined;
        user.resetPasswordExpire=undefined;

        await user.save({validateBeforeSave:false});
        return next(new ErrorHander(error.message,500));
    }
});
//reset password

exports.resetPassword=AsyncError(async(req,res,next)=>{
    //creating token hash
    const resetPasswordToken=crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
    const user=await User.findOne({
        resetPasswordToken,
        resetPasswordExpire:{$gt:Date.now()},
    });
    if(!user){
        return next(
            new ErrorHander(
                "Reset Password Token is invalid or has been expired",400
            )
        )
    }

    if(req.body.password!=req.body.confirmPassword){
         return next(new ErrorHander("Password does not match",400));
    }

    user.password=req.body.password;
    user.resetPasswordToken=undefined;
    user.resetPasswordExpire=undefined;
    await user.save();
    sendToken(user,200,res);
});
//get user details
exports.getUserDetails=AsyncError(async(req,res,next)=>{

    const user = await User.findById(req.user.id);

   
    res.status(200).json({
        success:true,
        user,
    });
}) ;
//update user profile
exports.updateProfile=AsyncError(async(req,res,next)=>{
    const newUserData={
        name:req.body.name,
        email:req.body.email,
        phoneno:req.body.phoneno,
        address:req.body.address,
     
    };

    const user= await User.findByIdAndUpdate(req.user.id, newUserData, {
        new:true,
        runValidators:true,
        useFindAndModify:false,
    });
    res.status(200).json({
  success:true,

    });
});


//get all user--by admin

exports.getAllUser=AsyncError(async(req,res,next)=>{
    const users=await User.find();
  
    res.status(200).json({
        success:true,
        users,
    });
});