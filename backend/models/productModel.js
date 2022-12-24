const mongoose=require("mongoose");
const productSchema=mongoose.Schema({
 name:{
    type:String,
    required:[true,"Please Enter product Name"]
 },
 description:{
    type:String,
    required:[true,"Please Ener product Description"]
 },
 price:{
   type:Number,
   required:[true,"Please Enter product price"],
   maxLength:[8,"Price should not exceed 8 characters"]
 },
 ratings:{
    type:Number,
    default:0
 },
 /* img mera aray nhi hai iska hai*/ 
 images:[
    {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }
    
 ],
category:{
    type:String,
    required:[true,"Please enter product category"],
   
    
},
Stock:{
    type:String,
    required:[true,"Please Enter Stock"],
    // default:1
},
Time:{
    type:String,
    required:[true],
},
numOfReviews:{
    type:Number,
    default:0
},
reviews:[
    {
        user:{
            type:mongoose.Schema.ObjectId,
            ref:"User",
            required:true,
        },
        name:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    comment:{
        type:String,
    }
}
],
   createdAt:{
    type:Date,
     default:Date.now
  }
/* Product stock ko skip kiya hai*/ 
})

module.exports=mongoose.model("Product",productSchema);