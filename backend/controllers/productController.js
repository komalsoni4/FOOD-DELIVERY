const Product=require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const AsyncError=require("../middleware/AsyncError");
const ApiFeatures = require("../utils/apifeatures");
const { Error } = require("mongoose");

//create Product --Admin
exports.createProduct= AsyncError(async(req,res,next)=>{
    const product=await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    });
}); 
//get product 
exports.getAllProducts=AsyncError(async(req,res)=>{
    const productCount=await Product.countDocuments();
    const apiFeature=new ApiFeatures(Product.find(),req.query).search().filter();
    const products= await apiFeature.query;
     res.status(200).json({success:true,
         products,
        productCount,});
 });
//update product --Admin
exports.updateProduct=AsyncError(async(req,res,next)=>{
    let product =await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHander("Product not Found",500));
    }
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });
    res.status(200).json({
        success:true,
        product
    })
})
//delete --Admin
exports.deleteProduct = AsyncError(async(req,res,next)=>{
    const product=await Product.findById(req.params.id);
      if(!product){
        return  next(new ErrorHander("Product not Found",500));
      }
      await product.remove();
      res.status(200).json({
        success:true,
        message:"Product Deleted Successfully"
      })
}) 

//get single product waale 
exports.getProductDetails=AsyncError(async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return  next(new ErrorHander("Product not Found",500));
    }
    res.status(200).json({
        success:true,
        product
    })
}) 
//create review
exports.createProductReview= AsyncError(async(req,res,next)=>{
    const {rating,comment,productId}=req.body;

    const review ={
        user:req.user._id,
       name:req.user.name,
       rating:Number(rating),
       comment,
    };

    const product=await Product.findById(productId);
    const isReviewed=product.reviews.find((rev)=>
        rev.user.toString()===req.user._id.toString()
    );
    if(isReviewed){
    product.reviews.forEach(rev=>{
        if(rev.user.toString()===req.user._id.toString())
        rev.rating=rating,
        rev.comment=comment
    })
    }  else{
        product.reviews.push(review);
        product.numOfReviews=product.reviews.length
    }
  let avg=0;
    product.ratings=product.reviews.forEach(rev=>{
        avg=avg+rev.rating
    })/product.reviews.length

    await product.save({validateBeforeSave:false});
    res.status(200).json({
        success:true,

    })
});

//get all reviews of a product
exports.getProductReviews=AsyncError(async(req,res,next)=>{
    const product=await Product.findById(req.query.id);
    if(!product){
        return next(new ErrorHander("Product not found",404));
    }
    res.status(200).json({
        success:true,
    });
});

exports.deleteReview=AsyncError(async (req,res,next)=>{
    const product =await Product.findById(req.query.productId);
    if(!product){
        return next(new ErrorHander("Product not found",404));
    }
    const reviews=product.reviews.filter(rev=>rev._id.toString()!=req.query.id.toString());
    let avg=0;
    reviews.forEach((rev)=>{
        avg+=rev.ratings
    });
    const ratings=avg/reviews.length;

    const numOfReviews=reviews.length;

    await Product.findByIdAndUpdate(req.query.productId,{
        reviews,
        ratings,
        numOfReviews,
    },
    {
        new:true,
        runValidators:true,
        useFindAndModify:false,
    }
    );
    res.status(200).json({
        success:true,
        review:product.reviews,
    })
})